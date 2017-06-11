// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');

const app = express();

const apiTest = require('./api-test');
const indexHtml = require('./index-html');


const compressResp = req => {
    return !req.header('x-no-compression');

};


// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(session({
    name: 'hackathon', secret: 'keyboard cat',
    cookie: {expires: new Date(Date.now() + 360 * 60000 * 24), secure: false}
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression({filter: compressResp}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie");
    next();
});
app.all('/api/_ah/health', (req, res) => res.sendStatus(200));
app.use('/api/test', apiTest);


// Serve the / for etags management.
app.get('/', indexHtml);
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'), {
    maxAge: 31536000000
}));

app.use(express.static(path.resolve(__dirname, '..', 'static')));
// Always return the main index.html, so react-router render the route in the client
app.get('*', indexHtml);

module.exports = app;
