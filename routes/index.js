const express = require('express');
const verifyToken = require('../middlewares/verifyToken')

//ROUTES
const users = require('./users');

//instancia do router
const router = express.Router();

//rotas base
router.use('/users', users);

//expoe as rotas
module.exports = router;