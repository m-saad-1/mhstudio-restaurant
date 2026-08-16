const sharp = require('sharp');
sharp('public/images/The_loch_&_tyne.jpg')
  .avif({ quality: 80 })
  .toFile('public/images/the_loch_and_tyne.avif')
  .then(() => console.log('Converted to AVIF'))
  .catch(err => console.error(err));
