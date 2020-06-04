const dotenv = require('dotenv');
const temperatureSocket = require('./socketTemperaturesEmitter');

dotenv.config();

module.exports = (io) => {
  io.on('connection', (socket) => {
    let interval;
    console.log('New web socket client connected');
    if (interval) {
      clearInterval(interval);
    }
    temperatureSocket(io);
    interval = setInterval(() => temperatureSocket(io), process.env.FR_RELOAD || 10000);
    socket.on('disconnect', () => {
      console.log('Web socket client disconnected');
      clearInterval(interval);
    });
  });
}