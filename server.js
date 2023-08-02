require('dotenv').config()
const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
const app = express();

const routes = fs.readdirSync('./routes/');
const route_list = ['/'];

const httpPORT = 80;
const httpsPORT = 443;

// configuration (ejs)
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());  
app.use(express.urlencoded({extended: true}));
app.use(express.static('public')); 
app.use(express.static('dist'));
app.use(express.static('scripts'));
for (let i in routes) {
    if (fs.lstatSync(`./routes/${routes[i]}`).isFile()) {
        const curroute = require(`./routes/${routes[i]}`);
        curroute.load(app);
        console.log(`retrieving routes from /${routes[i]}`);
        for (let j in curroute.routes) {
            route_list.push(`${curroute.routes[j]}`);
            console.log(`- ${curroute.routes[j]} loaded`);
        }
    }
}

// routes
// main page
app.get('/', function(req, res) {
    res.render('main_new', {'param': 'routes', 'domain_name': 'https://shawnlu.dev', 'headers':route_list});
});

app.get('/old/', function(req, res) {
    res.render('main', {'param': 'routes', 'domain_name': 'https://shawnlu.dev', 'headers':route_list});
});

//404
app.get('*', function(req, res){
    res.status(404).send('404, This page doesn\'t exist (yet)');
});

// // Running the servers
try {
    var options = {
        key: fs.readFileSync(process.env.PRIVKEY_PATH),
        cert: fs.readFileSync(process.env.CERT_PATH)
    }

    var httpsServer = https.createServer(options, app).listen(httpsPORT, function() {
        console.log("HTTPS listening at https://localhost:%s", httpsPORT);	
    });
} catch (err) {
    console.log("err: HTTPS server failed, check key/cert");
}

var httpServer = http.createServer(app).listen(httpPORT, function() {
   console.log("HTTP listening at http://localhost:%s", httpPORT);
});
