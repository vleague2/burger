// REQUIRE ORM FILE
const orm = require('../config/orm');

let burger = {
    all: function(callback) {
        orm.selectAll("burgers", (res) => {
            callback(res);
        })
    }
}