const utilsService = require('./utils.js');
const pool = require('./postgres');


const ROOM_TYPES = {
  MATEUSZ: 0,
  OUTSIDE: 1,
  CORRIDOR: 2,
  KITCHEN: 3,
  LIVING_ROOM: 4,
  MARYSIA_ROOM: 5,
};

module.exports = (io) => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(utilsService.formatSelectQueryAllTypes(ROOM_TYPES), [], (err, databaseResponse) => {
      done()
      if (err) {
        console.log(err.stack);
      } else {
        const temperatures = databaseResponse.rows;
        console.log('Emmited teperatures', temperatures);
        io.emit('FromTemperatures', temperatures);
      }
    })
  });
};