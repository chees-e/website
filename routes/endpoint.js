module.exports.load = function(app) {
    app.get('/endpoint', function(req, res) {
        res.send('you found an endpoint');
    });
};

module.exports.routes = ['/endpoint'];
