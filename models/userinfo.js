var connection = require('../connection');

// CRUD function
function Server() {
    
    // Create
    this.create = function(obj, res) {
        connection.acquire(function(err, con) {
            con.query('insert into users set ?', obj, function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'obj creation failed'});
                } else {
                    res.send({status: 0, message: 'obj created successfully'});
                }
            });
        });
    };

    // Retrieve
    this.retrieve = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from users', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    // Update
    this.update = function(obj, res) {
        connection.acquire(function(err, con) {
            con.query('update users set ? where id = ?', [obj, obj.id], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'obj update failed'});
                } else {
                    res.send({status: 0, message: 'obj updated successfully'});
                }
            });
        });
    };

    // Delete
    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('delete from users where id = ?', [id], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };
}

module.exports = new Server();