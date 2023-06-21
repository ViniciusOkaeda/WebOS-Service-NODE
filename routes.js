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
router.post("/getEdges", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        includeData: req.body.includeData};
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getEdges() {
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
            'public/edge/getEdges', {data})
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
    getEdges();
})

router.post("/getSubscribedChannels", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        includeData: req.body.includeData};
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getSubscribedChannels() {
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
            'public/channel/getSubscribedChannels', {data})
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
    getSubscribedChannels();
})
router.post("/getVodHomepageRow", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        includeData: req.body.includeData};
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getVodHomepageRow() {
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
            'public/vod/getVodHomepageRow', {data})
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
    getVodHomepageRow();
})


router.post("/getSubscribedAndLockedChannels", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getSubscribedAndLockedChannels() {
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
            'public/channel/getSubscribedAndLockedChannels', {data})
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
    getSubscribedAndLockedChannels();
})
router.post("/getEpgUpdatedEventsV2", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        timestamp: req.body.timestamp,
        from: req.body.from,
        to: req.body.to
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getUpdatedEventsV2() {
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
            'public/epg/getUpdatedEventsV2', {data})
            .then(function (response) {
                if(response.data.status === 1) {
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getUpdatedEventsV2();
})
router.post("/getChannelCategories", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getChannelCategories() {
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
            'public/channelCategory/getChannelCategories', {data})
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
    getChannelCategories();
})
router.post("/getFavoriteChannels", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getChannelCategories() {
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
            'public/profile/getFavoriteChannels', {data})
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
    getChannelCategories();
})


router.post("/getCategory", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        categoriesId: req.body.categoriesId,
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getCategory() {
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
            'public/recommendationEngine/getCategory', {data})
            .then(function (response) {
                if(response.data.status === 1) {
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getCategory();
})
router.post("/getDataV2", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        vodsId: req.body.vodsId,
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getDataV2() {
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
            'public/vod/getDataV2', {data})
            .then(function (response) {
                if(response.data.status === 1) {
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getDataV2();
})
router.post("/getUpdatedEventsV2", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        ids: req.body.ids,
        timestamp: req.body.timestamp
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getUpdatedEventsV2() {
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
            'public/epg/getUpdatedEventsV2', {data})
            .then(function (response) {
                if(response.data.status === 1) {
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getUpdatedEventsV2();
})
router.post("/getEventRecommendationRows", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        type: req.body.type,
        id: req.body.id
    
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getEventRecommendationRows() {
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
            'public/recommendationEngine/getEventRecommendationRows', {data})
            .then(function (response) {
                if(response.data.status === 1) {
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getEventRecommendationRows();
})
router.post("/addToMyList", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        type: req.body.type,
        id: req.body.id
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function addToMyList() {
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
            'public/recommendationEngine/addToMyList', {data})
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
    addToMyList();
})
router.post("/getMyList", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getMyList() {
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
            'public/recommendationEngine/getMyList', {data})
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
    getMyList();
})
router.post("/removeFromMyList", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        type: req.body.type,
        id: req.body.id
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function removeFromMyList() {
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
            'public/recommendationEngine/removeFromMyList', {data})
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
    removeFromMyList();
})


router.post("/getStreamVodUrlV3", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var nonpreferredEdgesIds= [283, 284, 309, 308, 303, 304, 310, 306, 305, 307, 257, 258, 333];
    var preferredEdgesIds = [
        3,
        366,
        280,
        279,
        281,
        277,
        288,
        289,
        276,
        278,
        248,
        2,
        205,
        35,
        256,
        34,
        329,
        294,
        286,
        285,
        290,
        282,
        332,
        287,
        245,
        203,
        204,
        246,
        244,
        247,
        249,
        7,
        295,
        293,
        292,
        296,
        291,
        331,
        334,
        330,
        262,
        367,
        321,
        263,
        105,
        261,
        342,
        5,
        343,
        259,
        264,
        260,
        364,
        369,
        13,
        365,
        363,
        112,
        368,
        157,
        158,
        197,
        198
      ];
    var data = {
        vodsId: req.body.vodsId,
        nonpreferredEdgesIds,
        preferredEdgesIds
        
    };
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getStreamVodUrlV3() {
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
            'public/vod/getStreamUrlV3', {data})
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
    getStreamVodUrlV3();
})
router.post("/getStreamChannelUrlV3", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var nonpreferredEdgesIds= [283, 284, 309, 308, 303, 304, 310, 306, 305, 307, 257, 258, 333];
    var preferredEdgesIds = [
        3,
        366,
        280,
        279,
        281,
        277,
        288,
        289,
        276,
        278,
        248,
        2,
        205,
        35,
        256,
        34,
        329,
        294,
        286,
        285,
        290,
        282,
        332,
        287,
        245,
        203,
        204,
        246,
        244,
        247,
        249,
        7,
        295,
        293,
        292,
        296,
        291,
        331,
        334,
        330,
        262,
        367,
        321,
        263,
        105,
        261,
        342,
        5,
        343,
        259,
        264,
        260,
        364,
        369,
        13,
        365,
        363,
        112,
        368,
        157,
        158,
        197,
        198
      ];
    
      if(req.body.live == false) {
          var data = {
              channelsId: req.body.channelsId,
              nonpreferredEdgesIds,
              preferredEdgesIds,
              timestamp: req.body.timestamp
          };

      } else {
          var data = {
              channelsId: req.body.channelsId,
              nonpreferredEdgesIds,
              preferredEdgesIds,
          };
      }
	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getStreamChannelUrlV3() {
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
            'public/channel/getStreamUrlV3', {data})
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
    getStreamChannelUrlV3();
})

router.post("/getNextPlaybackItems", jsonParser, function (req, res) {
    var dataHeader = req.body;
    var data = {
        type: req.body.type,
        id: req.body.id
    };

	console.log("o register data", data)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    async function getNextPlaybackItems() {
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
            'public/recommendationEngine/getNextPlaybackItems', {data})
            .then(function (response) {
                if(response.data.status === 1) {
					res.send(response.data)
					console.log(response.data)
                    
                } else {
                    res.send(response.data);
                }
            })

    }
    getNextPlaybackItems();
})

module.exports = router
