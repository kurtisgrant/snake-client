
const lyricParser = (lyrics) => {
  const lyricsOut = lyrics.split(' ').join('   ').split('\n').join('        ').split(', ').join(',   ');
  return lyricsOut + '       ';
};


module.exports = { lyricParser };
