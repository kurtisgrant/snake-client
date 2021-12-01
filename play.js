const { connect } = require('./client');
const { setupInput } = require('./input');
const { lyricParser, cej } = require('./lyricParser');

let i = -1;
const getNextLyric = () => {
  i++;
  return cej[i % cej.length];
};


console.log("Connecting ...");
const conn = connect();

setInterval(() => {
  conn.write(`Say: ${getNextLyric()}`);
}, 400);


setupInput(conn);
