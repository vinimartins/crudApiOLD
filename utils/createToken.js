/**
 * ANTES
 * 
const config = require('./config/default');
const jwt = require('jsonwebtoken');

const token = jwt.sign(
        { id },
        config.secret, 
        { expiresIn: 300 } //Em segundos = 5 minutos.
    );
*/

const jwt = require('jsonwebtoken');
const { secret } = require('../config/default'); //Pega apenas 1 objeto (propriedade)

module.exports = (data, expiresIn = 300) => 
    jwt.sign(
        data,
        secret, 
        { expiresIn } //Em segundos = 5 minutos.
    ); //auto return