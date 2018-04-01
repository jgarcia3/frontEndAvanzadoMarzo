'use strict';

const multer = require('multer');
const path = require('path');
const jimp = require('jimp');

/*jimp.read(__dirname, '../uploads', function (err, __dirname) {
  if (err) throw err;
  undefined.resize(256, 256)            // resize
    .quality(60)                 // set JPEG quality
    .greyscale()                 // set greyscale
    .write("undefined-small-bw.jpg"); // save
});*/

//Multer upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + '- ' + Date.now() + '-' + file.originalname)
  }
});



module.exports = multer({ storage: storage });