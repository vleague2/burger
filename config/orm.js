//REQUIRE CONNECTION FILE
const connection = require('./connection');

// BUILD ORM OBJECT FOR DATABASE QUERIES
let orm = {

    // function to select all
    selectAll: function(table, callback) {

        // send query to mysql
        connection.query(

            // select all from the table we pass in
            "SELECT * FROM " + table,
            (err, result) => {
                if (err) throw err;

                // send the result to the callback
                callback(result);
            }
        )
    },

    // function to insert a row into table
    insertOne: function(table, name, callback) {

        // build the query
        let queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + name + "', '0')";

        // send query to mysql
        connection.query(
            queryString,
            (err, result) => {
                if (err) throw err;

                // send result to the callback
                callback(result);
            }
        
        )
    },


    // function to update row in database
    updateOne: function(table, col, val, whereCol, whereVal, callback) {
        // build the query
        let queryString = "UPDATE " + table + " SET " + col + "=" + val + " WHERE " + whereCol + "=" + whereVal;

        // send query to mysql
        connection.query(
            queryString,
            (err, result) => {
                if (err) throw err;

                // send the result to the callback
                callback(result);
            }
        )
    }
}

// EXPORT ORM
module.exports = orm;