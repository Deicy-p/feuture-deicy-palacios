const express = require('express');

const app = express();

// ===============================
// CONFIGURACIÓN
// ===============================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

// ===============================
// PÁGINA PRINCIPAL
// ===============================

app.get('/', (req, res) => {

  res.send(`

  <!DOCTYPE html>
  <html lang="es">

  <head>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Lovely Aaron Essentials</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

    <script src="https://unpkg.com/lucide@latest"></script>

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

      /* =========================
         HEADER
      ========================= */

      header{
        width:100%;
        position:fixed;
        top:0;
        left:0;
        z-index:1000;

        padding:20px 6%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:20px;

        background:rgba(0,0,0,0.25);
        backdrop-filter:blur(10px);
      }

      .logo{
        font-size:clamp(24px, 4vw, 40px);
        font-weight:700;
        color:white;
        white-space:nowrap;
      }

      .logo span{
        color:#e7b8a4;
      }

      nav{
        display:flex;
        gap:20px;
        flex-wrap:wrap;
        justify-content:center;
      }

      nav a{
        text-decoration:none;
        color:white;
        font-size:15px;
        transition:0.3s;
      }

      nav a:hover{
        color:#e7b8a4;
      }

      .btn-header{
        background:#d8b08c;
        padding:12px 22px;
        border-radius:10px;
        color:white;
        text-decoration:none;
        font-weight:600;
        transition:0.3s;
        white-space:nowrap;
      }

      .btn-header:hover{
        background:#c79972;
      }

      /* =========================
         HERO
      ========================= */

      .hero{
        width:100%;
        min-height:100vh;

        background-image:
        linear-gradient(
          rgba(40,20,10,0.60),
          rgba(40,20,10,0.60)
        ),
        url('/img/Dei.jpeg');

        background-size:cover;
        background-position:center;

        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;

        padding:140px 20px 120px;
      }

      .hero-content{
        max-width:900px;
        width:100%;
        color:white;
      }

      .hero-content h4{
        letter-spacing:5px;
        font-size:clamp(14px, 2vw, 18px);
        margin-bottom:20px;
        color:#f1d3c5;
      }

      .hero-content h1{
        font-size:clamp(40px, 8vw, 90px);
        line-height:1.1;
        margin-bottom:25px;
        font-weight:700;
      }

      .hero-content p{
        font-size:clamp(16px, 2vw, 20px);
        line-height:1.8;
        color:#f5e6dd;
        margin-bottom:40px;
        padding:0 10px;
      }

      .hero-btn{
        display:inline-block;
        padding:16px 36px;
        border:2px solid white;
        color:white;
        text-decoration:none;
        font-size:17px;
        transition:0.3s;
        border-radius:18px;
      }

      .hero-btn:hover{
        background:#d8b08c;
        border-color:#d8b08c;
      }

      /* =========================
         MENU RAPIDO
      ========================= */

      .menu-rapido{
        width:100%;

        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;

        gap:15px;

        padding:25px 20px;

        background:#2d1d15;
      }

      .menu-rapido a{
        display:flex;
        align-items:center;
        gap:8px;

        text-decoration:none;

        background:rgba(255,255,255,0.1);

        color:white;

        padding:12px 18px;

        border-radius:14px;

        transition:0.3s;
      }

      .menu-rapido a:hover{
        background:#d8b08c;
        transform:translateY(-3px);
      }

      .menu-rapido i{
        width:18px;
        height:18px;
      }

      /* =========================
         FOOTER
      ========================= */

      footer{
        width:100%;
        text-align:center;
        padding:18px;
        background:#1b120d;
        color:white;
        font-size:14px;
      }

      /* =========================
         RESPONSIVE
      ========================= */

      @media(max-width:950px){

        header{
          flex-direction:column;
          padding:20px;
        }

        nav{
          width:100%;
        }

        .btn-header{
          width:100%;
          text-align:center;
        }

      }

      @media(max-width:600px){

        nav{
          gap:12px;
        }

        nav a{
          font-size:14px;
        }

        .hero{
          padding-top:180px;
        }

        .hero-content p{
          line-height:1.6;
        }

        .menu-rapido{
          padding:20px 10px;
        }

        .menu-rapido a{
          width:100%;
          justify-content:center;
        }

      }

    </style>

  </head>

  <body>

    <!-- HEADER -->

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

        <a href="/personas">Personas</a>

      </nav>

      <a href="/api/citas" class="btn-header">
        Agendar
      </a>

    </header>

    <!-- HERO -->

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

    </section>

    <!-- MENU RAPIDO -->

    <div class="menu-rapido">

      <a href="/api/productos">
        <i data-lucide="package"></i>
        Productos
      </a>

      <a href="/servicios">
        <i data-lucide="sparkles"></i>
        Servicios
      </a>

      <a href="/api/pedidos">
        <i data-lucide="shopping-bag"></i>
        Pedidos
      </a>

      <a href="/api/pagos-pse">
        <i data-lucide="credit-card"></i>
        Pagos
      </a>

      <a href="/api/citas">
        <i data-lucide="calendar-days"></i>
        Citas
      </a>

      <a href="/personas">
        <i data-lucide="users"></i>
        Personas
      </a>

    </div>

    <!-- FOOTER -->

    <footer>

      © 2026 Lovely Aaron Essentials ✨
      Creado con ❤️ por Deicy Palacios.

    </footer>

    <script>
      lucide.createIcons();
    </script>

  </body>

  </html>

  `);

});

// ===============================
// VISTA PERSONAS
// ===============================

app.get('/personas', (req, res) => {

  const personas = require('./models/personas');

  let html = `

  <!DOCTYPE html>
  <html lang="es">

  <head>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Personas - Lovely Aaron</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

    <style>

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        font-family:'Poppins', sans-serif;
        background:#f5f5f5;
        padding:30px 20px;
      }

      h1{
        text-align:center;
        color:#d48c70;
        margin-bottom:40px;
        font-size:clamp(28px, 5vw, 45px);
      }

      .contenedor{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
        gap:20px;
      }

      .card{
        background:white;
        padding:25px;
        border-radius:20px;
        box-shadow:0 5px 15px rgba(0,0,0,0.1);
        transition:0.3s;
      }

      .card:hover{
        transform:translateY(-5px);
      }

      .card h2{
        color:#333;
        margin-bottom:15px;
        font-size:22px;
      }

      .card p{
        color:#666;
        margin:10px 0;
        font-size:15px;
        word-break:break-word;
      }

    </style>

  </head>

  <body>

    <h1>
      Clientes Registrados
    </h1>

    <div class="contenedor">

  `;

  personas.forEach(persona => {

    html += `

      <div class="card">

        <h2>
          ${persona.nombres} ${persona.apellidos}
        </h2>

        <p>
          📧 ${persona.email}
        </p>

        <p>
          📱 ${persona.telefono}
        </p>

        <p>
          📍 ${persona.ciudad}
        </p>

        <p>
          🪪 ${persona.tipoDoc}: ${persona.numDoc}
        </p>

      </div>

    `;

  });

  html += `

    </div>

  </body>

  </html>

  `;

  res.send(html);

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