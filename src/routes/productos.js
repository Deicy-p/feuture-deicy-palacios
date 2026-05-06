const express = require('express');
const router = express.Router();

const productos = require('../models/productos');

// GET - listar productos reales
router.get('/', (req, res) => {
    res.json(productos);
});

module.exports = router;