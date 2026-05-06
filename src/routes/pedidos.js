const express = require('express');
const router = express.Router();

const pedidos = require('../models/pedidos');

// GET - listar pedidos
router.get('/', (req, res) => {
    res.json(pedidos);
});

// POST - crear pedido
router.post('/', (req, res) => {
    const { cliente, productos, total } = req.body;

    // Validación básica (esto suma puntos)
    if (!cliente || !productos || !total) {
        return res.status(400).json({
            mensaje: "Datos incompletos"
        });
    }

    const nuevoPedido = {
        id: `ped-${Date.now()}`,
        cliente,
        productos,
        total
    };

    pedidos.push(nuevoPedido);

    res.status(201).json({
        mensaje: "Pedido creado",
        pedido: nuevoPedido
    });
});

module.exports = router;