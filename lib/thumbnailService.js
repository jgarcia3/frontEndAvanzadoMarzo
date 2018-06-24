'use strict'

const Jimp = require('jimp');
const cote = require('cote');

const responder = new cote.Responder({ name: 'thumbnail responder' });

responder.on("createThumbnail", (req, done) => {
       console.log(
        "servicio: petición de",
        req.path,
        req.file
      );
  
  
      // Hago el jimp
      const jimp = (path_file,file_name) => {
        Jimp.read(path_file, function (err, thumbnail) {
        if (err) throw err;
        thumbnail
            .resize(100, 100)            // resize
            .quality(60)                 // set JPEG quality
            .greyscale()                 // set greyscale
            .write(`uploads/thumbnail-${file_name}`); // save reescribiendo la última imágen subida
      });
      const result = console.log(
        "servicio: petición de",
        req.path,
        req.file
      );
    }
  
      done(result);
    
  });

  const jimp = (path_file,file_name) => {
    Jimp.read(path_file, function (err, thumbnail) {
    if (err) throw err;
    thumbnail
        .resize(100, 100)            // resize
        .quality(60)                 // set JPEG quality
        .greyscale()                 // set greyscale
        .write(`uploads/thumbnail-${file_name}`); // save reescribiendo la última imágen subida
  })};

  module.exports = jimp;