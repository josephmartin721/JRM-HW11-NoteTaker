// Dependencies
const express = require("express");
const fs = require("fs");


// Express App Creation
var app = express();
var PORT = process.env.PORT || 3000

// Express App Start
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Server Start
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});