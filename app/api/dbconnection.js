const express = require("express");
const app = express();

const mysql = require('mysql');
const databaseOptions = require('../config/mysqlconn');

//method to get data 
app.get("/get/:name/:fruit", (req, res) => {
    var name = req.params.name
    var fruit = req.params.fruit
    const connection = mysql.createConnection(databaseOptions);
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('successfully connected as id ' + connection.threadId);

        //write query
        const query = "SELECT Preventive_Methods, Control_Methodds FROM TECHTOES.Medfly WHERE L_NAME=" + "'" + name + "'" + "AND F_Name=" + "'" + fruit + "'";
        connection.query(query,function (err, result) {
            if (err){
                res.json(err);
            }else {
                console.log(result);
                res.json(result);
            }
        });
    });
});

module.exports = app;
