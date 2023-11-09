const express = require("express");

const app = express();

const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  const followers = [
    "abhishek",
    "bob",
    "harshit",
    "steve",
    "mansha",
    "david",
    "Mridul",
    "josh",
  ];
  let { username } = req.params;
  res.render("instagram.ejs", { username, followers });
});

app.listen(port, () => {
  console.log("Listening");
});
