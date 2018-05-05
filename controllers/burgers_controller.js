// REQUIRE MODULES
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// CREATE ROUTES
router.get('/', (req, res) => {
    burger.all(data => {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })
})

module.exports = router;