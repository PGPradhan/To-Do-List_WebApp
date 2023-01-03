//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set("view-engine", "ejs");
app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDate()
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Sunday"
      break;
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednessday"
      break;
    case 4:
      day = "Thursday"
      break;
    case 5:
      day = "Friday"
      break;
    case 6:
      day = "Saturday"
      break;

    default:
      day="Not valid Date"

  }
  res.render("list.ejs", {
    anyDay: day
  });
});

app.listen(8000, function() {
  console.log("Server is running on port 8000");
});
