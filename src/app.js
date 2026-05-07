const express = require('express');
const app = express();

// ===============================
// CONFIGURACIÓN
// ===============================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Carpeta pública
app.use(express.static('src/public'));

// ===============================
// RUTA PRINCIPAL
// ===============================

app.get('/', (req, res) => {

  res.send(`

    <html>

      <head>

        <title>Lovely Aaron Essentials</title>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Great+Vibes&display=swap" rel="stylesheet">

        <style>

          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{

            height:100vh;

            display:flex;

            justify-content:center;

            align-items:center;

            overflow:hidden;

            font-family:'Poppins', sans-serif;

            position:relative;

            background:#f5eee6;
          }

          /* ===============================
          FONDO
          =============================== */

          .background{

            position:absolute;

            width:100%;

            height:100%;

            background-image:url('/img/Dei.jpeg');

            background-size:cover;

            background-position:center;

            filter:brightness(0.45);

            z-index:-1;
          }

          /* ===============================
          CONTENIDO
          =============================== */

          .contenido{

            text-align:center;

            color:white;

            padding:30px;
          }

          /* ===============================
          TÍTULO
          =============================== */

          h1{

            font-family:'Great Vibes', cursive;

            font-size:95px;

            color:#fffaf5;

            text-shadow:
            0 0 10px rgba(255,255,255,0.8),
            0 0 20px rgba(255,255,255,0.5),
            0 0 40px rgba(255,255,255,0.3);

            margin-bottom:10px;
          }

          /* ===============================
          SUBTÍTULO
          =============================== */

          p{

            letter-spacing:5px;

            font-size:18px;

            color:#f5e6d3;

            margin-bottom:45px;
          }

          /* ===============================
          BOTONES
          =============================== */

          .botones{

            display:flex;

            gap:20px;

            justify-content:center;

            flex-wrap:wrap;
          }

          a{

            text-decoration:none;

            padding:15px 32px;

            border-radius:50px;

            background:
            rgba(255,248,240,0.18);

            border:
            1px solid rgba(255,255,255,0.3);

            color:#fffaf5;

            font-size:18px;

            font-weight:500;

            backdrop-filter:blur(10px);

            transition:0.3s;

            box-shadow:
            0 8px 20px rgba(0,0,0,0.2);
          }

          a:hover{

            transform:scale(1.08);

            background:
            rgba(216,176,140,0.35);

            border:
            1px solid rgba(255,255,255,0.5);
          }

          /* ===============================
          RESPONSIVE
          =============================== */

          @media(max-width:768px){

            h1{
              font-size:60px;
            }

            p{
              font-size:14px;
              letter-spacing:3px;
            }

            a{
              width:100%;
            }

            .botones{
              flex-direction:column;
            }
          }

        </style>

      </head>

      <body>

        <div class="background"></div>

        <div class="contenido">

          <h1>Lovely Aaron Essentials</h1>

          <p>RENACE, BRILLA Y CONQUISTA ✨</p>

          <div class="botones">

            <a href="/api/productos">
              💄 Productos
            </a>

            <a href="/api/pedidos">
              🛍️ Pedidos
            </a>

            <a href="/api/pagos-pse">
              💳 Pagos
            </a>

            <a href="/api/citas">
              📅 Citas
            </a>

          </div>

        </div>

      </body>

    </html>

  `);

});

// ===============================
// IMPORTAR RUTAS
// ===============================

const productosRouter = require('./routes/productos');

const pedidosRouter = require('./routes/pedidos');

const pagosRouter = require('./routes/pagos-pse');

const citasRouter = require('./routes/citas');

// ===============================
// USAR RUTAS
// ===============================

app.use('/api/productos', productosRouter);

app.use('/api/pedidos', pedidosRouter);

app.use('/api/pagos-pse', pagosRouter);

app.use('/api/citas', citasRouter);

// ===============================
// PUERTO
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`);

});