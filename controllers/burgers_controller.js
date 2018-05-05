// REQUIRE MODULES
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// CREATE ROUTES
router.get('/', (req, res) => {
    burger.all(data => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })
})

router.put('/api/burgers/:id', (req, res) => {
    
    let whereVal = req.params.id;

    console.log(whereVal);

    burger.update("devoured", 1, "id", whereVal, data => {
        if (result.changedRows === 0) {
            return res.status(404).end(0);
        }
        else {
            res.status(200).end();
        }
    })

})

module.exports = router;