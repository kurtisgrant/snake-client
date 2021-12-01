const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connection established ... ');
    conn.write('Name: Kurtis');
    conn.write('Colour: Blue');
    conn.write('Color: Yellow');
  });

  // setInterval(() => {
  //   conn.write('Move: down');
  // }, 500);
  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 600);
  // setInterval(() => {
  //   conn.write('Move: right');
  // }, 1200);

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };