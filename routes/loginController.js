"use strict";

const Usuario = require("../models/Usuario")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

class LoginController {
  index(req, res, next) {
    res.locals.email = process.env.NODE_ENV === 'development' ? 'admin@example.com' : '';
    res.locals.error = "";
    res.render("login");
  }

  async post(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    res.locals.error = "";
    res.locals.email = email;


    const user = await Usuario.findOne({ email: email });

    if (!user || !await bcrypt.compare(password, user.password)) {
      res.locals.error = "Credenciales incorrectas";
      res.render("login");
      return;
    }

    req.session.authUser = { _id: user._id };

    //usuario encontrado y validado
    res.redirect("/")
  }

  //POST /loginJWT

  async postLoginJWT(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Usuario.findOne({ email: email });

    if (!user || !await bcrypt.compare(password, user.password)) {
      res.json({ sucess: false, error: 'Wrong credentials' });
      return;
    }

    //El usuario está y coincide la pass
    jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    }, (err, token) => {
      if (err) {
        next(err);
        return;
      }
      res.json({ sucess: true, token: token });

    });


  }

  logout(req, res, next) {
    delete req.session.authUser; //borrar authUser de la sesión
    req.session.regenerate(function (err) { //crear nueva sesión vacía
      if (err) {
        next(err);
        return;
      }
      res.redirect("/");
    })
  }
}



module.exports = new LoginController();