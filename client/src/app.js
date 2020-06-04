import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';

import './app.css';
import HousePlanSvg from './housePlanSvg';


const ENDPOINT = process.env.SOCKET_SERVER;
const ROOM_TYPES = ['MATEUSZ', 'OUTSIDE', 'CORRIDOR', 'KITCHEN', 'LIVING_ROOM', 'MARYSIA'];
const initialTemperatures = ROOM_TYPES.reduce((sum, key) => {
  sum[key] = '';
  return sum;
}, {})


const App = () => {
    const [temperatures, setTemperatures] = useState(initialTemperatures);

    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);

      socket.on('connect_failed', () => {
        setTemperatures(initialTemperatures);
      });

      socket.on('disconnect', function () {
        setTemperatures(initialTemperatures);
      });

      socket.on('FromTemperatures', responseTemperatures => {
        const temperatureNewState = responseTemperatures.reduce((sum, value) => {
          sum[ROOM_TYPES[value.type]] = value.temperature;
          return sum;
        }, {})
        setTemperatures(temperatureNewState);
      });
    }, []);

    return (
      <div className="app">
        <HousePlanSvg {...temperatures} />
      </div>
    );
  }

export default App;
