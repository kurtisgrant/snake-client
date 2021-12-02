const { connect } = require('./client');
const { setupInput } = require('./input');
const { SONGS } = require('./constants');
const { lyricParser } = require('./lyricParser');

const lyrics = lyricParser(SONGS.beatIt);

let thisLyric = lyrics;
const getNextLyric = () => {
  const thisL = thisLyric;
  const fstChar = thisLyric[0];
  thisLyric = thisLyric.slice(1) + fstChar;
  return '| ' + thisL.slice(0, 12) + ' |';
};
console.log("Connecting ...");
const conn = connect();

setInterval(() => {
  lyric = getNextLyric();
  conn.write(`Say: ${lyric}`);
}, 150);


setupInput(conn);
