// REQUIRED PACKAGES
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;


//ALLOWS JSON TO DISPLAY ON API PAGE
app.use(bodyParser.json({ type: "application/*+json"}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text({ type: "text/html" }));

app.use(bodyParser.json({ type: "application/vnd.custom-type" }));

//ROUTES TO HTML PAGES AND API PAGE
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//LISTEN FUNCTION WITH MODIFIED CONSOLE LOG WITH LINK TO PAGE
app.listen(PORT, function() {
	console.log("App listening on http://localhost:" + PORT);
});

//=============================================================================
// CANT FIGURE OUT WHY IT WOULDNT WORK THIS WAY I HAD TO TRY A DIFFERENT AVENUE
//=============================================================================

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser')

// var PORT = process.env.PORT || 8080;

// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false})

// app.use(bodyParser.json({ type: 'application/*+json' }))

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// app.use(bodyParser.text({ type: 'text/html' }))

// require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);


// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });
