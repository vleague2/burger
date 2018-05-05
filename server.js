// REQUIRE MODULES 
const express = require('express');
const bodyParser = require('body-parser');

// SET UP SERVER PORT
const PORT = process.env.PORT || 8080;

// SET UP EXPRESS
const app = express();

// SET STATIC CONTENT FOLDER
app.use(express.static('public'));

// SET UP BODY PARSER
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// SET UP HANDLEBARS
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// IMPORT ROUTES
const routes = require('./controllers/burgers_controller');
app.use(routes);

// START SERVER
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
})