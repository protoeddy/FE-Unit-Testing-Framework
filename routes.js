// Define API in this file.

var user = require('./models/userinfo');

module.exports = {
    configure: function(app) {
        app.get('/getUsers', function(req, res) {
            user.retrieve(res);
        });

        app.post('/addUser', function(req, res) {
            user.create(req.body, res);
        });

        app.put('/updateUser', function(req, res) {
            user.update(req.body, res);
        });

        app.delete('deleteUser/:id/', function(req, res) {
            user.delete(req.params.id, res);
        });
    }
};