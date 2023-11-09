const express = require("express");

const app = express();

const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("*", (req, res) => {
  res.render("nopagefound.ejs");
});

app.get("/ig/:username", (req, res) => {
  //We must import the data to use it

  const instaData = require("./data.json");
  let { username } = req.params;
  let data = instaData[username];
  console.log(data);
  res.render("instagram.ejs", { data });
});

app.listen(port, () => {
  console.log("Listening");
});
