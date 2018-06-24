"use strict";
/**
 * Modulo con función que devuelve un middleware
 * El middleware verifica si la sesión no está autenticada para redirigir al login
 */
module.exports = function () {
  return function (req, res, next) {
    if (!req.session.authUser) {
      //Redirigir al login si no está autenticado
      res.redirect("/login");
      return;
    }
    //si tengo usuario, dejo continuar
    next();
  }
}

