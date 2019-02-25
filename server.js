// require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");

//var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});


module.exports = app;
