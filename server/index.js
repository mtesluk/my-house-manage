const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const pool = require('./postgres');

dotenv.config();

const port = process.env.PORT;
const temperatureApiRoute = require('./routeTemperatures');

const app = express();
app.use(bodyParser.json())
app.use(temperatureApiRoute);

const server = http.createServer(app);
const io = socketIo(server);

const socketConnect = require('./socketConnect');
socketConnect(io, pool);

server.listen(port, () => console.log(`Listening on port ${port}`));