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
// PÁGINA PRINCIPAL
// ===============================

app.get('/', (req, res) => {

  res.send(`

  <html>

    <head>

      <title>Lovely Aaron Essentials</title>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

      <style>

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:'Poppins', sans-serif;
          overflow-x:hidden;
          background:#f8f1eb;
        }

        header{
          width:100%;
          position:absolute;
          top:0;
          left:0;
          z-index:10;
          padding:25px 80px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(10px);
        }

        .logo{
          font-size:40px;
          font-weight:700;
          color:white;
        }

        .logo span{
          color:#e7b8a4;
        }

        nav{
          display:flex;
          gap:30px;
        }

        nav a{
          text-decoration:none;
          color:white;
          font-size:17px;
          transition:0.3s;
        }

        nav a:hover{
          color:#e7b8a4;
        }

        .btn-header{
          background:#d8b08c;
          padding:12px 24px;
          border-radius:8px;
          color:white;
          text-decoration:none;
          font-weight:600;
        }

        .hero{
          width:100%;
          height:100vh;

          background-image:
          linear-gradient(
          rgba(40,20,10,0.55),
          rgba(40,20,10,0.55)
          ),
          url('/img/Dei.jpeg');

          background-size:cover;
          background-position:center;

          display:flex;
          justify-content:center;
          align-items:center;
          text-align:center;
          padding:20px;
          position:relative;
        }

        .hero-content{
          max-width:850px;
          color:white;
        }

        .hero-content h4{
          letter-spacing:8px;
          font-size:18px;
          margin-bottom:20px;
          color:#f1d3c5;
        }

        .hero-content h1{
          font-size:90px;
          line-height:1.1;
          margin-bottom:25px;
          font-weight:700;
        }

        .hero-content p{
          font-size:18px;
          line-height:1.8;
          color:#f5e6dd;
          margin-bottom:40px;
        }

        .hero-btn{
          display:inline-block;
          padding:18px 40px;
          border:2px solid white;
          color:white;
          text-decoration:none;
          font-size:18px;
          transition:0.3s;
        }

        .hero-btn:hover{
          background:#d8b08c;
          border-color:#d8b08c;
        }

        .menu-rapido{
          position:absolute;
          bottom:40px;
          width:100%;
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .menu-rapido a{
          text-decoration:none;
          background:rgba(255,255,255,0.12);
          backdrop-filter:blur(10px);
          color:white;
          padding:15px 28px;
          border-radius:50px;
          border:1px solid rgba(255,255,255,0.2);
          transition:0.3s;
        }

        .menu-rapido a:hover{
          background:#d8b08c;
        }

        footer{
          position:absolute;
          bottom:10px;
          width:100%;
          text-align:center;
          color:rgba(255,255,255,0.85);
          font-size:14px;
          letter-spacing:1px;
          z-index:20;
        }

      </style>

    </head>

    <body>

      <header>

        <div class="logo">
          Lovely <span>Aaron</span>
        </div>

        <nav>

          <a href="/">Inicio</a>

          <a href="/api/productos">Productos</a>

          <a href="/servicios">Servicios</a>

          <a href="/api/pedidos">Pedidos</a>

          <a href="/api/pagos-pse">Pagos</a>

          <a href="/api/citas">Citas</a>

          <a href="/api/personas">Personas</a>

        </nav>

        <a href="/api/citas" class="btn-header">
          Agendar
        </a>

      </header>

      <section class="hero">

        <div class="hero-content">

          <h4>
            BEAUTY • HAIR • GLAM
          </h4>

          <h1>
            Lovely Aaron Essentials
          </h1>

          <p>
            Renace, brilla y conquista con nuestros
            productos capilares, pelucas, maquillaje
            y tratamientos de belleza premium.
          </p>

          <a href="/api/citas" class="hero-btn">
            Agendar cita
          </a>

        </div>

        <div class="menu-rapido">

          <a href="/api/productos">
            💄 Productos
          </a>

          <a href="/servicios">
            ✨ Servicios
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

          <a href="/api/personas">
            👩 Personas
          </a>

        </div>

      </section>

      <footer>

        © 2026 Lovely Aaron Essentials ✨
        Creado con ❤️ por Deicy Palacios.

      </footer>

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

const personasRouter = require('./routes/personas');

// ===============================
// USAR RUTAS
// ===============================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('src/public'));

app.use('/api/productos', productosRouter);

app.use('/api/pedidos', pedidosRouter);

app.use('/api/pagos-pse', pagosRouter);

app.use('/api/citas', citasRouter);

app.use('/api/personas', personasRouter);

// ===============================
// PUERTO
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`);

});