// Dependencies
const express = require("express");
const fs = require("fs");


// Express configuration
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
})