'use strict';

// Load mysql module
var mysql = require('mysql');

// Create mysql connection object
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234'
});

// mysql opration (CRUD)
connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL Connected...');
        connection.query('use unittesting', function(err) {
            if (err) {
                throw err;
            } else {
                // Retrieve
                connection.query('select * from users where ?', {ID: 1}, function(err, rows) {
                    if (err) {
                        throw err;
                    } else {
                        console.log(rows);
                    }
                });

                // Create
                connection.query('insert into users set ?', {
                    username: 'Test',
                    password: 'Test',
                    email: 'protoeddy@gmail.com'
                }, function(err, result) {
                    if (err) {
                        throw err;
                    } else {
                        console.log(result.insertId);
                    }
                });

                // Update
                connection.query('update users set ? where ?', [{
                    username: 'admin',
                    password: 'admin'
                }, {ID: 1}], function(err, result) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('update:' + result.changedRows);
                    }
                });

                // Delete
                connection.query('delete from users where ?', {ID: 7}, function(err, result) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('delete:' + result.affectedRows);
                    }
                });
            }
        });
    }
});