module.exports.load = function(app) {
    // stuff
    app.get('/test', function(req, res) {
        res.send({text:'Hello world'});
    });

    app.get('/time', function(req, res) {
            let curr = new Date();
            res.send(curr.toString());
    });


    // login
    app.get('/login', function(req, res) {
        return res.send('<form method="POST" action="/login"><input type="email" name="email"></form>');
    });

    app.post('/login', function(req, res) {
        return res.send('You are now logged in');
    });

    app.get('/resume', function(req, res) {
        const resume_name = "ShawnLuResume2023v5.pdf";
        return res.render('resume', {"resume_name": resume_name});
    })
};

module.exports.routes = ['/test', '/time', '/login', '/resume'];

