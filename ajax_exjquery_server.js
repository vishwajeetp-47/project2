var exp = require('express')
var mysql=require('mysql2')

var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"dac"
    }
)
con.connect(function(err){
    if(!err)
      console.log("db connected");
    else
    console.log("db connection failed")
});


var app=exp()
app.use(exp.static("scripts"))

app.listen(9000,function(){
    console.log("ajax server started")
});

app.get('/empform',function(req,res){
          res.sendFile(__dirname+"/empform_jquery.html")
});
app.get("/getname",function(req,res){
          var eid=req.query.empid;
          con.query("select * from emp10 where empno="+eid,function(err,result){
            if(!err)
            {
                if(result[0]==null)
                  res.send("Employee not found")
               
            }
            else{
                str="<table border='1'>";
                str+="<tr>";
                str+="<td>";
                str+=""+result[0].ENAME;
                str+="</td>";
                str+="<td>";
                str+=""+result[0].JOB;
                str+="</td>";
                str+="<td>";
                str+=""+result[0].DEPTNO;
                str+="</td>";
                str+="<td>";
                str+=""+result[0].MGR;
                str+="</td>";
                str+="<td>";
                str+=""+result[0].EMPNO;
                str+="</td>";
                str+="</tr>";
                str+="</table>";
                res.send(str);
                console.log(str);
                
            }

          })

})