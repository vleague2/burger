// REQUIRE ORM FILE
const orm = require('../config/orm');

// CREATE BURGER OBJECT
let burger = {
    all: function(callback) {
        orm.selectAll("burgers", (res) => {
            callback(res);
        })
    }
}

// EXPORT BURGER OBJECT
module.exports = burger;