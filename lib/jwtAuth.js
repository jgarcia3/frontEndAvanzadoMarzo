"use strict";
const jwt = require('jsonwebtoken');
/**
 * Modulo con función que devuelve un middleware
 * El middleware verifica si lel token jwt es válido
 */
module.exports = function () {
  return function (req, res, next) {

    const token = req.body.token || req.query.token || req.get('autentication');

    if (!token) {
      const err = new Error('no token provided');
      next(err);
      return;
    }

    //verificamos el token jwt
    jwt.verify(token, process.env.JWT_SECRET, (err, decodify) => {
      if (err) {
        next(err);
        return;
      }
      //apuntamos el _id en la petición para ser usado por los siguientes middlewares
      req.apiUserId = decodify._id;

      //el token es válido, por lo que dejo continuar
      next();
    })


  }
}

