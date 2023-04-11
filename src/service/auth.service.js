const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({email: email}).select("senha");

const generateToken = (userId) => jwt.sign({id: userId}, "cnjaAiwRTha2673baw8923b6f3B09wa8sn", {expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
};