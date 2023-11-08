const express = require("express");

const app = express();

let port = 8080;
// Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
// app.listen() is a method that will again and again keep listening for any of the request and as soon as it gets the request it will give the response

// app.use((req, res) => {
//   console.log("Request received");
//   res.send("This is a basic response");
// });

app.get("/:username/:id", (req, res) => {
  res.send("We can also store data in variables that we will pass.");
  let { username, id } = req.params;
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("No Results yet");
});

app.get("/apple", (req, res) => {
  res.send("You are at the apple Path");
});
app.get("/banana", (req, res) => {
  res.send("You are at the Banana Path");
});
app.get("/mango", (req, res) => {
  res.send("You are at the Mango Path");
});
app.get("/peach", (req, res) => {
  res.send("You are at the Peach Path");
});
app.get("*", (req, res) => {
  res.send("Wrog Path Reached please go back");
});

//  You can use the upper given syntax to create routes and to send different reqs at different routes.

// We can install nodemon by typing the following command npm i -g nodemon so that whenever we change anything in the js file the server automatically restarts because it does not restarts automatically with nodejs ..

// Now we just have to run our index.js file usig nodemon thats it.
