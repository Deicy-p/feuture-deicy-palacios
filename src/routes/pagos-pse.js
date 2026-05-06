const express = require('express');
const router = express.Router();

const pagos = require('../models/pagos');

// GET (para navegador)
router.get('/', (req, res) => {
    res.send('Ruta de pagos activa');
});

// POST (para crear pago)
router.post('/', (req, res) => {
    const { banco, monto, referencia } = req.body;

    if (!banco || !monto || !referencia) {
        return res.status(400).json({
            mensaje: "Datos incompletos"
        });
    }

    const nuevoPago = {
        banco,
        monto,
        referencia,
        estado: "APROBADO"
    };

    pagos.push(nuevoPago);

    res.json({
        mensaje: "Pago procesado",
        pago: nuevoPago
    });
});

module.exports = router;