module.exports.load = function(app) {
    app.get('/hamencode', function(req, res) {
        const encoder = require(`./hidden/hamencoder.js`);

        return res.render('hamencoder', {'key': 'todo', 'input': 'todo', 'output':'todo'});
    });

    app.post('/hamencode', function(req, res) {

    });
    
    app.get('/hamencoder', function(req,res) {
        res.redirect('/hamencode');
    })
};

module.exports.routes = ['/hamencode', '/hamencoder'];
