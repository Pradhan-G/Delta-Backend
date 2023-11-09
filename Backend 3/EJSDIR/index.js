const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs"); // Used to set a lot of things but here using that we are setting the view engine to ejs.

app.get("/", (req, res) => {
  res.render("home.ejs");
}); // setting the home directory here and using the response.render to render the template called home.ejs

//The view engine property expects us to create a folder named views and set upp all the template files over there.

//Next we create the file inside the views folder and now we are ready to write the code template in that file. the extension should be .ejs

// How will the res.render know where to look for the home.ejs file. by default epress will try to find the views named folder and if you have created that then you are good to go and if you have not then you have to enter the definitive path.

// we can start our server from whereever we are if we give the relative path to it or the definitive path to it but express will try to find the views folder from where the server has been started. so its a good practice to start the server from the current directory in which index.js is present.

// if we want to avoid this bullshit of server searching the views folder from where we started the server. we can do two things. [Line 3] we need to require a library called path and then set the views folders path using the syntax app.set("views", path.join(__dirname,"/views"));

// here __dirname is the definitive path of our index.js file and combined with /views will give the difinite or absolute path of the views folder .. PSYCHHHHHHHHHHHH

app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log("Listening");
});
