// REQUIRE MYSQL MODULE
const mysql = require('mysql');

// CREATE OBJECT TO HOLD CONNECTION INFO FOR MYSQL
let connection = mysql.createConnection(
    process.env.JAWSDB_URL
);

// CONNECT TO THE DATABASE
connection.connect(err => {
    if (err) {

        // IF ERROR, REPORT ERROR
        console.log("error connecting: " + err.stack);
        return;
    }

    // IF SUCCESSFUL, REPORT CONNECTION ID
    console.log("connected as id " + connection.threadId);
})

// EXPORT THE CONNECTION
module.exports = connection;