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
app.use(express.static('scripts'));
for (let i in routes) {
    const curroute = require(`./routes/${routes[i]}`);
    curroute.load(app);
    console.log(`retrieving routes from /${routes[i]}`);
    for (let j in curroute.routes) {
    	route_list.push(`${curroute.routes[j]}`);
	console.log(`- ${curroute.routes[j]} loaded`);
    }
}

// routes
// main page
app.get('/', function(req, res) {
    visit_count += 1;
    res.render('main', {'param': 'routes', 'domain_name': 'https://shawnlu.dev', 'headers':route_list});
});

//404
app.get('*', function(req, res){
    res.send('404 Bozo, whatcha trynna do??', 404);
});

// // Running the servers
var options = {
    key: fs.readFileSync(process.env.PRIVKEY_PATH),
    cert: fs.readFileSync(process.env.CERT_PATH)
};

var httpsServer = https.createServer(options, app).listen(httpsPORT, function() {
    console.log("HTTPS listening at https://localhost:%s", httpsPORT);	
});

var httpServer = http.createServer(app).listen(httpPORT, function() {
   console.log("HTTP listening at http://localhost:%s", httpPORT);
});
