// REQUIRE ORM FILE
const orm = require('../config/orm');

// CREATE BURGER OBJECT
let burger = {
    all: function(callback) {
        orm.selectAll("burgers", (res) => {
            callback(res);
        })
    },

    update: function(col, val, whereCol, whereVal, callback) {
        orm.updateOne("burgers", col, val, whereCol, whereVal, (res) => {
            callback(res);
        })
    },

    insert: function(name, callback) {
        orm.insertOne("burgers", name, (res) => {
            callback(res);
        })
    }
}

// EXPORT BURGER OBJECT
module.exports = burger;