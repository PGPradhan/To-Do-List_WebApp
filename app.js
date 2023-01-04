//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const items = ["Buy food", "Cook food", "Eat food"];
const workItem = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.set("view-engine", "ejs");
app.get("/", function(req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list.ejs", {
    ListTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  //var item = req.body.newItem;
  let item = req.body.newItem;
  if (req.body.list == "Work") {
    workItem.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");

  }
});

app.get("/work", function(req, res) {
  res.render("list.ejs", {
    ListTitle: "Work List",
    newListItems: workItem
  });
});



app.listen(8000, function() {
  console.log("Server is running on port 8000");
});
