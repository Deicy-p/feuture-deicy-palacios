const express = require('express');

const router = express.Router();

// ===============================
// PAGOS
// ===============================

let pagos = [];

// ===============================
// FORMULARIO PAGOS
// ===============================

router.get('/', (req, res) => {

  let html = `

  <html>

    <head>

      <title>Pagos - Lovely Aaron</title>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

      <style>

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{

          font-family:'Poppins', sans-serif;

          min-height:100vh;

          background:
          linear-gradient(
          rgba(40,20,10,0.70),
          rgba(40,20,10,0.70)
          ),
          url('/img/Dei.jpeg');

          background-size:cover;

          background-position:center;

          display:flex;

          justify-content:center;

          align-items:center;

          padding:40px;
        }

        .card{

          width:100%;

          max-width:600px;

          background:
          rgba(255,255,255,0.12);

          backdrop-filter:blur(10px);

          border:
          1px solid rgba(255,255,255,0.2);

          border-radius:25px;

          padding:40px;

          color:white;

          box-shadow:
          0 10px 30px rgba(0,0,0,0.3);
        }

        h1{

          text-align:center;

          margin-bottom:30px;

          font-size:45px;
        }

        label{

          display:block;

          margin-top:20px;

          margin-bottom:8px;

          font-weight:600;
        }

        input,
        select{

          width:100%;

          padding:15px;

          border:none;

          border-radius:12px;

          font-size:16px;

          outline:none;
        }

        button{

          width:100%;

          margin-top:30px;

          padding:16px;

          border:none;

          border-radius:15px;

          background:#d8b08c;

          color:white;

          font-size:18px;

          font-weight:bold;

          cursor:pointer;

          transition:0.3s;
        }

        button:hover{

          background:#c49a75;
        }

        .volver{

          display:block;

          margin-top:25px;

          text-align:center;

          color:white;

          text-decoration:none;
        }

      </style>

    </head>

    <body>

      <div class="card">

        <h1>💳 Pagos</h1>

        <form method="POST" action="/api/pagos-pse">

          <label>Nombre completo</label>

          <input
            type="text"
            name="cliente"
            placeholder="Escribe tu nombre"
            required
          >

          <label>Banco</label>

          <select name="banco" required>

            <option value="">Selecciona</option>

            <option>Bancolombia</option>

            <option>Nequi</option>

            <option>Davivienda</option>

            <option>Banco de Bogotá</option>

            <option>BBVA</option>

          </select>

          <label>Valor del pago</label>

          <input
            type="number"
            name="valor"
            placeholder="Ej: 50000"
            required
          >

          <label>Referencia</label>

          <input
            type="text"
            name="referencia"
            placeholder="Ej: LA2026"
            required
          >

          <button type="submit">

            Procesar Pago

          </button>

        </form>

        <a class="volver" href="/">

          ⬅ Volver al inicio

        </a>

      </div>

    </body>

  </html>

  `;

  res.send(html);

});

// ===============================
// PROCESAR PAGO
// ===============================

router.post('/', (req, res) => {

  const {

    cliente,

    banco,

    valor,

    referencia

  } = req.body;

  const nuevoPago = {

    cliente,

    banco,

    valor,

    referencia,

    estado:'APROBADO'
  };

  pagos.push(nuevoPago);

  res.send(`

  <html>

    <head>

      <title>Pago Exitoso</title>

      <style>

        body{

          font-family:Arial;

          background:#f5ebe3;

          display:flex;

          justify-content:center;

          align-items:center;

          height:100vh;
        }

        .mensaje{

          background:white;

          padding:40px;

          border-radius:20px;

          text-align:center;

          box-shadow:0 10px 20px rgba(0,0,0,0.2);
        }

        h1{

          color:#8b5e3c;
        }

        p{

          margin-top:10px;
        }

        a{

          display:inline-block;

          margin-top:20px;

          padding:12px 24px;

          background:#d8b08c;

          color:white;

          text-decoration:none;

          border-radius:12px;
        }

      </style>

    </head>

    <body>

      <div class="mensaje">

        <h1>✨ Pago realizado con éxito ✨</h1>

        <p><strong>Cliente:</strong> ${cliente}</p>

        <p><strong>Banco:</strong> ${banco}</p>

        <p><strong>Valor:</strong> $${valor}</p>

        <p><strong>Referencia:</strong> ${referencia}</p>

        <p><strong>Estado:</strong> APROBADO ✅</p>

        <a href="/api/pagos-pse">

          Realizar otro pago

        </a>

      </div>

    </body>

  </html>

  `);

});

module.exports = router;
