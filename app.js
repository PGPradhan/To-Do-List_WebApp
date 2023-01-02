//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view-engine", "ejs");
app.get("/",(req,res)=>{

  var today = new Date();
  var day = "";
  if (today.getDate()==6 || today.getDate()==0){
    day="Weekend";
  }else{
    day="Weekday";

  }
  res.render("list", {anyDay:day});
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
