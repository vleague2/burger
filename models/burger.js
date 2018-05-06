// REQUIRE ORM FILE
const orm = require('../config/orm');

// CREATE BURGER OBJECT
let burger = {

    // select all function
    all: function(callback) {

        // which calls the selectAll in the orm object and passes it a variable
        orm.selectAll("burgers", (res) => {

            // send the response to the callback
            callback(res);
        })
    },

    // update function, which takes a lot of parameters
    update: function(col, val, whereCol, whereVal, callback) {

        // call the orm updateOne function and pass it the parameters it needs
        orm.updateOne("burgers", col, val, whereCol, whereVal, (res) => {

            // send the response to the callback
            callback(res);
        })
    },

    // insert function
    insert: function(name, callback) {

        // calls the orm insertOne function and passes it the parameters it needs
        orm.insertOne("burgers", name, (res) => {

            // send the response to the callback
            callback(res);
        })
    }
}

// EXPORT BURGER OBJECT
module.exports = burger;