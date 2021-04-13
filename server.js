// Dependencies
const express = require("express");
const fs = require("fs");
const http = require("http");
const PORT = process.env.PORT || 3000;

// Express Setup
var app = express();

//Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Server Startup
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});