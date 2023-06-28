var exp=require('express');
var nodeapp=exp();

nodeapp.get('/greet',function(req,res){
     res.send("<h1>Welcome to the app<h1>");
});
nodeapp.get('/login',function(req,res){
     res.sendFile(__dirname+"/loginform.html");
});
nodeapp.get('/logincheck',function(req,res){
     if(req.query.uid=="vishwajeet" && req.query.pwd=="123")
         res.send("login successful");
     else
         res.send("login failed");
});

nodeapp.listen(9000,function(){
     console.log("server is started")
})