'use strict';

var getIP = require('external-ip');
var http = require('http');
var argv = require('yargs').argv;

const timeout = argv.timeout || 5000;

setInterval(() => {
    getIP()(function (err, ip) {
        if (err) {
            // every service in the list has failed
             console.log(err);
             return;
        }

        console.log(`public ip: ${ip}`);

        var req = http.request({
            method: 'POST',
            host: argv.host,
            port: argv.port,
            path: `/keepalive/${argv.name}/${ip}`
        }, (res) => {
            console.log('response: ' + res.statusCode);
        });

        req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
        });

        req.end();
    });
}, timeout);