const { connect } = require('./client');
const { setupInput } = require('./input');



let msg = 'This is a test of Kurtis\'s scrolling message...  ';
console.log("Connecting ...");
const conn = connect();

setInterval(() => {

  // console.log(`Name: ${msg}`);
  conn.write(`Name: ${msg}`);

  const tmp = msg[0];
  msg = msg.slice(1) + tmp;

}, 600);

setupInput(conn);
