'use strict';

const config = require('./conf.json');

var getIP = require('external-ip');
var http = require('http');

setInterval(() => {
    getIP()(function (err, ip) {
        if (err) {
            // every service in the list has failed
             console.log(err);
             return;
        }

        console.log(ip);

        var req = http.request({
            method: 'POST',
            host: config.serverIp,
            port: config.serverPort,
            path: `/keepalive/vialidad/${ip}`
        }, (res) => {
            console.log('response: ' + res.statusCode);
        });

        req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
        });

        req.end();
    });
}, config.timeout);