// REQUIRE MODULES
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// CREATE ROUTES
router.get('/', (res, res) => {
    burger.all(data => {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })
})