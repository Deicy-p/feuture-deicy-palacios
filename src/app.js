const express = require('express');
const app = express();

app.use(express.json());

// Servir imagen
app.use(express.static('src/public'));

// ===============================
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Lovely Aaron</title>
        <style>
          body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
          }

          /* Imagen de fondo */
          .background {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url('/fondo.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.6; /* 👈 suaviza para que no tape */
          }

          /* Tarjeta */
          .card {
            position: relative;
            z-index: 1;
            background: rgba(255, 255, 255, 0.85);
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }

          h1 {
            font-size: 26px;
            letter-spacing: 2px;
            margin-bottom: 10px;
          }

          p {
            color: #555;
          }

          a {
            display: block;
            margin: 10px;
            text-decoration: none;
            background: #ff4d6d;
            color: white;
            padding: 10px;
            border-radius: 10px;
            font-weight: bold;
          }

          a:hover {
            background: #d6336c;
          }
        </style>
      </head>

      <body>
        <div class="background"></div>

        <div class="card">
          <h1>LOVELY AARON</h1>
          <p>Renace, brilla y conquista ✨</p>

          <a href="/api/productos">💄 Productos</a>
          <a href="/api/pedidos">🛍️ Pedidos</a>
          <a href="/api/pagos-pse">💳 Pagos</a>
        </div>
      </body>
    </html>
  `);
});

// ===============================
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const pagosRouter = require('./routes/pagos-pse');

app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/pagos-pse', pagosRouter);

// ===============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:\${PORT}`);
});