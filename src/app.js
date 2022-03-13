const express = require('express');
const http = require('http');
const dotenv = require('dotenv');

// Loading environment variables;
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Creating the server
const app = express();
const httpServer = http.createServer(app);

// Routes
app.get('/', (req, res) => {
    res.send({message: 'Welcome!'});
});

const server = httpServer.listen(SERVER_PORT, error => {
    if (error) console.error(error);

    console.log('Server has started on port', server.address().port);
});
