const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connection established ... ');
    conn.write('Name: Kurtis');
  });

  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 500);
  // setInterval(() => {
  //   conn.write('Move: right');
  // }, 600);

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;