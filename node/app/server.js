'use strict';

require('dotenv/config');

if (!process.env.APM_SERVICE_NAME) {
  console.log('APM_SERVICE_NAME not exist')
}

if (!process.env.APM_SERVER_URL) {
  console.log('APM_SERVER_URL not exist')
}

// Add this to the VERY top of the first file loaded in your app
const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: process.env.APM_SERVICE_NAME,
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: process.env.APM_SERVER_URL,
  })

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);