const express = require('express');
const router = express.Router();
const pool = require('./postgres');


router.post('/', (req, apiResponse) => {
  body = req.body;
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(`INSERT INTO temperatures(temperature, type)  VALUES(${body.temperature}, ${body.identification})`, [], (err, queryResponse) => {
      done()
      if (err) {
        console.log(err.stack);
        apiResponse.status(500).send({ message: err.stack });
      } else {
        apiResponse.send({ message: 'Ok' }).status(201);
      }
    })
  });
});


module.exports = router;