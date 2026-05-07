const express = require('express');

const router = express.Router();

// ===============================
// GUARDAR CITAS
// ===============================

let citas = [];

// ===============================
// VER FORMULARIO
// ===============================

router.get('/', (req, res) => {

  let html = `

  <html>

    <head>

      <title>Citas - Lovely Aaron</title>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Great+Vibes&display=swap" rel="stylesheet">

      <style>

        body{
          margin:0;
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          font-family:'Poppins', sans-serif;
          position:relative;
          overflow:auto;
        }

        /* Fondo */

        .background{
          position:fixed;
          width:100%;
          height:100%;

          background-image:url('/img/Dei.jpeg');

          background-size:cover;
          background-position:center;

          filter:brightness(0.35);

          z-index:-1;
        }

        /* Caja */

        .contenedor{
          width:90%;
          max-width:600px;

          background:rgba(255,255,255,0.08);

          border:1px solid rgba(255,255,255,0.2);

          border-radius:30px;

          padding:40px;

          backdrop-filter:blur(10px);

          color:white;

          margin:40px 0;
        }

        h1{
          text-align:center;

          font-family:'Great Vibes', cursive;

          font-size:70px;

          margin-bottom:10px;
        }

        p{
          text-align:center;

          margin-bottom:30px;
        }

        input{
          width:100%;

          padding:15px;

          margin-bottom:20px;

          border:none;

          border-radius:15px;

          font-size:16px;
        }

        button{
          width:100%;

          padding:15px;

          border:none;

          border-radius:15px;

          background:#ff4d88;

          color:white;

          font-size:18px;

          cursor:pointer;

          transition:0.3s;
        }

        button:hover{
          background:#ff1f6b;
        }

        .cita{
          background:rgba(255,255,255,0.08);

          padding:20px;

          border-radius:20px;

          margin-top:20px;
        }

        .volver{
          display:inline-block;

          margin-top:25px;

          text-decoration:none;

          color:white;

          background:rgba(255,255,255,0.12);

          padding:12px 24px;

          border-radius:50px;
        }

      </style>

    </head>

    <body>

      <div class="background"></div>

      <div class="contenedor">

        <h1>Agenda tu cita ✨</h1>

        <p>Lovely Aaron Essentials</p>

        <form method="POST" action="/api/citas">

          <input 
            type="text" 
            name="nombre" 
            placeholder="Tu nombre"
            required
          >

          <input 
            type="text" 
            name="servicio" 
            placeholder="Servicio que deseas"
            required
          >

          <input 
            type="date" 
            name="fecha"
            required
          >

          <input 
            type="time" 
            name="hora"
            required
          >

          <button type="submit">
            Agendar cita
          </button>

        </form>

  `;

  citas.forEach(cita => {

    html += `

      <div class="cita">

        <h3>${cita.nombre}</h3>

        <p>💄 Servicio: ${cita.servicio}</p>

        <p>📅 Fecha: ${cita.fecha}</p>

        <p>⏰ Hora: ${cita.hora}</p>

      </div>

    `;

  });

  html += `

        <center>

          <a class="volver" href="/">
            ⬅ Volver al inicio
          </a>

        </center>

      </div>

    </body>

  </html>

  `;

  res.send(html);

});

// ===============================
// GUARDAR CITA
// ===============================

router.post('/', (req, res) => {

  const { nombre, servicio, fecha, hora } = req.body;

  const nuevaCita = {

    nombre,
    servicio,
    fecha,
    hora

  };

  citas.push(nuevaCita);

  res.redirect('/api/citas');

});

module.exports = router;