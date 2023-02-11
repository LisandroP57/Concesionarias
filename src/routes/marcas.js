const express = require('express');
const router = express.Router();
const controller = require('../controllers/marcasController');

/* Marcas */
router.get('/', controller.marcas);

/* marca/:marca */
router.get('/:marca', controller.detalle);

module.exports = router;