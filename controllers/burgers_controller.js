// REQUIRE MODULES
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// CREATE ROUTES

// home page route
router.get('/', (req, res) => {

    // call the 'all' function in the burger model
    burger.all(data => {

        // create a handlebars object with the data from the function
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);

        // send the object to the index page and render it to the screen
        res.render('index', hbsObject);
    })
})

// put route for devouring a burger
router.put('/api/burgers/:id', (req, res) => {
    
    // pull the id that came in from the URL
    let whereVal = req.params.id;

    console.log(whereVal);

    // call the 'update' function in the burgers model & pass variables
    burger.update("devoured", 1, "id", whereVal, result => {

        // if no rows were changed
        if (result.changedRows === 0) {
            // return an error code
            return res.status(404).end();
        }
        else {
            // otherwise, return the code that everything's good!
            res.status(200).end();
        }
    })
})

// post route for adding a new burger
router.post('/api/burgers', (req, res) => {
    
    // pull the burger name from the request body
    let burgerName = req.body.burgername;

    // call the 'insert' function on the burger model
    burger.insert(burgerName, result => {
        // and we're good!
        res.status(200).end(); 
    })
    
})

// EXPORT ROUTER
module.exports = router;