//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const items = ["Buy food","Cook food","Eat food"];
app.use(bodyParser.urlencoded({extended:true}));

app.set("view-engine", "ejs");
app.get("/", function(req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day:"numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US",options);

  res.render("list.ejs", {
    anyDay: day,newListItems: items
  });
});

app.post("/",function(req,res){
   var item = req.body.newItem;
   items.push(item);
  res.redirect("/");
})

app.listen(8000, function() {
  console.log("Server is running on port 8000");
});
