//REQUIRE CONNECTION FILE
const connection = require('./connection');

// BUILD ORM OBJECT FOR DATABASE QUERIES
let orm = {
    selectAll: function(table, callback) {
        connection.query(
            "SELECT * FROM " + table,
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        )
    },

    insertOne: function() {
        connection.query(

        )
    },

    updateOne: function(table, col, val, whereCol, whereVal, callback) {
        let queryString = "UPDATE " + table + " SET " + col + "=" + val + " WHERE " + whereCol + "=" + whereVal;

        connection.query(
            queryString,
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        )
    }
}

// EXPORT ORM
module.exports = orm;