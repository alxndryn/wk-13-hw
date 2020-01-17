//Set up MYSQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "locahost",
    port: 3306,
    user: "root",
    password: "Wheeloftime2020",
    database: "burgers_db",
});

// Make a connection
connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)''
});

// Export connection for our ORM to use
module.exports = connection;
