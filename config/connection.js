var mysql = require("mysql");

var connection = mysql.createConnection({
    port: "3306",
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function (err) {
    if(err) {
        console.log("There is an error connecting: " + err.stack);
        return;l
    }
        console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;

