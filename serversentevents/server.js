//server.js
//NodeJS

//import express module
//require() function, used to import the modules
const express = require("express");
const cors = require("cors");


//create the global object  (rest object)
let app = express();
//where "app" is the global object / rest object


//inform the location of HTML5 page to server
//app.use(express.static(__dirname+"/public"));
app.use(cors());



//Data : 10
//Data : 9
//Data : 8
//Data : 7


//Data : 0




//http://localhost:8080/ashokit


//GET, POST, PUT, DELETE,HEAD,OPTIONS,........
app.get("/ashokit",(req,res)=>{
    //set the MIME Type
    res.writeHead(200,{
        'Content-Type' : 'text/event-stream',
        'Cache-Control' : 'no-cache',
        'Connection' : 'keep-alive'
    });
    myFun(res,10);
});
function myFun(res,count){
    res.write("Data:"+ count + "\n\n");

    if(count){
        setTimeout(()=>{
            myFun(res,count-1)
        },1000);
    }else{
        res.end();
    }


};



// app.get("/",(req,res)=>{
//     res.sendFile("index.html");
// });

//assign the port number
app.listen(8080,()=>{
    console.log("server is alive");
});





