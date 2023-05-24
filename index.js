const express = require('express');
const cors = require('cors');
const app = express();
const CryptoJS = require("crypto-js");
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const https = require('https');
const sha1 = require('sha1');

app.use(express.json());

app.use(cors({
    origin: '*'
}));
const router = require('./routes.js')
app.use(router);
var jsonParser = bodyParser.json()

app.get('/', function (req, res, next) {
    res.send("Server is running")
})

app.listen( 3000, ()=>console.log("Api Rodando."));

https.createServer({
    cert: fs.readFileSync('./SSL/code.crt'),
    key: fs.readFileSync('./SSL/code.key')
}, app).listen(5001, ()=> console.log("Rodando em https"));