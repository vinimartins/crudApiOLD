const express = require('express');
const router = express.Router();

//controllers
const Users = require('../controllers/Users');

router.get('/:id', Users.get);
//colocar os demais.... post put etc

module.exports = router;