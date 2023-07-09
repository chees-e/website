module.exports.load = function(app) {
    app.get('/hamencode', function(req, res) {
        const encoder = require(`./hidden/hamencoder.js`);
        var output = "";
        if (req.query.message) {
            if (req.query.action == "encrypt") {
                output = encoder.encode(req.query.message, req.query.key)
            } else if (req.query.action == "decrypt") {
                output = encoder.decode(req.query.message, req.query.key)
            }
        }
        return res.render('hamencoder', {'key': req.query.key || "", 'input': req.query.message || ""
        , 'output':output || ""});
    });

    app.post('/hamencode', function(req, res) {
        res.redirect(`/hamencode?key=${req.body.key}&message=${req.body.message}&action=${req.body.encrypt_button || req.body.decrypt_button}`);
    });
    
    app.get('/hamencoder', function(req,res) {
        res.redirect('/hamencode');
    });

    app.get("/hamencode/api", function(req, res) {
        res.send("api todo");
    });
};

module.exports.routes = ['/hamencode', '/hamencoder'];
