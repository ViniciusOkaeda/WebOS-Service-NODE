const Router = require('express');
const CryptoJS = require("crypto-js");
const bodyParser = require('body-parser');
const axios = require('axios');
const sha1 = require('sha1');

const router = Router();
var jsonParser = bodyParser.json()

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Server is Running!"
    })
})

router.post("/loginMoTV", jsonParser, function (req, res) {
    var data = req.body;
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function loginUserMoTV() {
        var timestamp = new Date().getTime();
        const str = timestamp + 'vinicius.okaeda' + '9m15lgh3n6aykipou3pe4ecxgsylqbjtzz2fixu0';
        const hashSha1 = sha1(str);

        const authHead = 'vinicius.okaeda' + ':' + timestamp + ':' + hashSha1; 
    
        const api = axios.create({
            baseURL: "https://sms.yplay.com.br/",
            headers: {
              Authorization: authHead
            },
          })
		

        const response = await api.post(
            'api/Devices/Motv/apiLoginV2', {data})
            .then(function (response) {
                if(response.data.status === 1) {
                    var viewers_id = response.data.response;
					res.send(response.data)
                    

                } else {
                    res.send(response.data);
                }
            })
    }
    loginUserMoTV();
})

router.post("/loginMoTVWithToken", jsonParser, function (req, res) {
    var data = req.body;
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function loginUserMoTV() {
        var timestamp = new Date().getTime();
        const str = timestamp + 'vinicius.okaeda' + '9m15lgh3n6aykipou3pe4ecxgsylqbjtzz2fixu0';
        const hashSha1 = sha1(str);

        const authHead = 'vinicius.okaeda' + ':' + timestamp + ':' + hashSha1; 
    
        const api = axios.create({
            baseURL: "https://sms.yplay.com.br/",
            headers: {
              Authorization: authHead
            },
          })

        const response = await api.post(
            'api/Devices/Motv/apiLoginWithToken', {data})
            .then(function (response) {
                if(response.data.status === 1) {
                    var viewers_id = response.data.response;
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })
    }
    loginUserMoTV();
})

router.post("/getHomepageV2", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        includeData: req.body.includeData};
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getHomepageV2() {
        var timestamp = new Date().getTime();
        const str = timestamp + 'vinicius.okaeda@youcast.tv.br' + 'coebngqvwmebnprwlxtv6v4e7ixrk0px6yc76m2w';
        const hashSha1 = sha1(str);

        const authHead = dataHeader.authorization;
        const profile = Buffer.from(dataHeader.profileId).toString('base64');
        const language = Buffer.from(dataHeader.language).toString('base64');
        const devicesType = Buffer.from(dataHeader.devicesType).toString('base64');

        console.log("o devices", devicesType)

        const api = axios.create({
            baseURL: "https://mw.yplay.com.br/",
            headers: {
              authorization: authHead,
              profilesId: profile,
              language: language,
              devicesType: devicesType,
            },
          })

        const response = await api.post(
            'public/recommendationEngine/getHomepageV2', {data})
            .then(function (response) {
                if(response.data.status === 1) {
                    var viewers_id = response.data.response;
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getHomepageV2();
})

module.exports = router
