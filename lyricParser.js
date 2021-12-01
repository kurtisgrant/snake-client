
const lyricParser = (lyrics, type = 'lines') => {
  const lines = lyrics.split(/[\n,.]/).map(n => n.trim()).filter(n => n.length);
  const words = lyrics.split(/[\n,. ]/).map(n => n.trim()).filter(n => n.length);
  if (type === 'lines') {
    return lines;
  } else {
    return words;
  }
};
const cej = lyricParser(`If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
He came to town like a midwinter storm
He rode through the fields, so handsome and strong
His eyes was his tools and his smile was his gun
But all he had come for was having some fun
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
He brought disaster wherever he went
The hearts of the girls was to Hell, broken, sent
They all ran away so nobody would know
And left only men 'cause of Cotton-Eye Joe
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?
If it hadn't been for Cotton-Eye Joe
I'd been married long time ago
Where did you come from, where did you go?
Where did you come from, Cotton-Eye Joe?`, 'words');

module.exports = { lyricParser, cej };
