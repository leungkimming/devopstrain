// ############################################################################
// File Name: server.js
// Description:
//  Simple node.js application using express listening to port 80
// Author: Peter Leung (pleungms@hotmail.com)
// Modification history
//  Author         Date       Description
//  -------------- ---------- -------------------------------------------------
//  Peter Leung    21/08/2018 Initial version
//
// ############################################################################
// Note that port 80 will throw a "Error: listen EACCES 0.0.0.0:80" excemption
// on your local machine, for testing use another port such as 3000
var iPortNum = 4585;

var express = require('express');
var app = express();
var request = require('request');

// Routes
app.get('/', function (req, res) {
  request('http://13.76.194.121:45851/api/func2?param=hello', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send('Hello World full CD/CI both cloud & ground! from Micro service: ' + body);
     }
  })
});

// Create the server
app.listen(iPortNum, function () {
  console.log('Example app listening on port ' + this.address().port);
});
