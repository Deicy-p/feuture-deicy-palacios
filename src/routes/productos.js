const express = require('express');
const router = express.Router();

// ===============================
// PRODUCTOS
// ===============================

const productos = [

  {
    categoria: 'Productos Capilares',
    items: [
      {
        nombre: 'Shampoo Hidratante',
        precio: '$50.000',
        imagen: '/img/HIDRATANTE.jpeg'
      },
      {
        nombre: 'Mascarilla Reparadora',
        precio: '$60.000',
        imagen: '/img/Mascarilla.jpeg'
        
      },
      {
        nombre: 'Acondicionador Nutritivo',
        precio: '$50.000',
        imagen: '/img/Acondicionador.jpeg'
        
      },
      {
        nombre: 'Spray Protector Térmico',
        precio: '$45.000',
        imagen: '/img/spray.jpeg'
        
      }
    ]
  },

  {
    categoria: 'Caída del Cabello',
    items: [
      {
        nombre: 'Tónico Anticaída',
        precio: '$80.000',
        imagen: '/img/tonico.jpeg'
        
      },
      {
        nombre: 'Vitaminas Capilares',
        precio: '$95.000',
        imagen: '/img/vitaminas.jpeg'
        
      }
    ]
  },

  {
    categoria: 'Crecimiento y Brillo',
    items: [
      {
        nombre: 'Aceite de Romero',
        precio: '$50.000',
        imagen: '/img/aceite.jpeg'
      },
      {
        nombre: 'Serum Brillo Extremo',
        precio: '$70.000',
        imagen: '/img/serum.jpeg'
        
      }
    ]
  },

  {
    categoria: 'Pelucas',
    items: [
      {
        nombre: 'Peluca Lace Front',
        precio: '$450.000',
        imagen: '/img/pelucalace.jpeg'
        
      },
      {
        nombre: 'Peluca Natural',
        precio: '$520.000',
        imagen: '/img/Natural.jpeg' 
      },
      {
        nombre: 'Peluca de Encaje Completo',
        precio: '$600.000',
        imagen: '/img/Encaje.jpeg'
        
      },
      {
        nombre: 'Peluca de Fibra Sintética',
        precio: '$350.000',
        imagen: '/img/sintetica.jpeg'
      }
    ]
  },

  {
    categoria: 'Extensiones',
    items: [
      {
        nombre: 'Extensiones Sintéticas',
        precio: '$300.000',
        imagen: '/img/extensiones .jpeg'
        
      },
      {
        nombre: 'Extensiones Humanas',
        precio: '$1.000.000',
        imagen: '/img/variedad.jpeg'
      
      },
      {
        nombre: 'Extensiones de Clip',
        precio: '$400.000',
        imagen: '/img/clip.jpeg'
      }, 
      {
        nombre: 'Extensiones Adhesivas',
        precio: '$450.000',
        imagen: '/img/adhesivas.jpeg'
        
      }
    ]
  },

  {
    categoria: 'Maquillaje',
    items: [
      {
        nombre: 'Base de Maquillaje',
        precio: '$60.000',
        imagen: '/img/bases.jpeg'
        
      },
      {
        nombre: 'Labiales de larga duración',
        precio: '$45.000',
        imagen: '/img/labiales.jpeg'
        
      },
      {
        nombre: 'Paleta de Sombras',
        precio: '$80.000',
        imagen: '/img/paleta.jpeg'
       
      },
      {
        nombre: 'Delineador Líquido',
        precio: '$35.000',
        imagen: '/img/delineador.jpeg'
        
      }
    ]
  }

];

// ===============================
// RUTA PRODUCTOS
// ===============================

router.get('/', (req, res) => {

  let html = `

  <html>

    <head>

      <title>Productos - Lovely Aaron</title>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Great+Vibes&display=swap" rel="stylesheet">

      <style>

        body{
          margin:0;
          padding:40px;
          font-family:'Poppins', sans-serif;
          background:#3a0018;
          color:white;
        }

        h1{
          text-align:center;
          font-family:'Great Vibes', cursive;
          font-size:70px;
          margin-bottom:50px;
        }

        .contenedor{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
          gap:25px;
        }

        .card{
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.15);
          border-radius:25px;
          padding:25px;
          backdrop-filter:blur(10px);
          box-shadow:0 10px 20px rgba(0,0,0,0.3);
          transition:0.3s;
        }

        .card:hover{
          transform:translateY(-8px);
        }

        h2{
          margin-bottom:20px;
          color:#ffd6e0;
        }

        .producto{
          background:rgba(255,255,255,0.08);
          padding:15px;
          border-radius:15px;
          margin-bottom:15px;
          text-align:center;
        }

        .producto img{
          width:100%;
          height:220px;
          object-fit:cover;
          border-radius:15px;
          margin-bottom:10px;
        }

        .producto p{
          margin:8px 0;
        }

        .precio{
          color:#ffd166;
          font-weight:bold;
          font-size:18px;
        }

        a{
          display:inline-block;
          margin-top:40px;
          text-decoration:none;
          background:white;
          color:#7a0026;
          padding:14px 24px;
          border-radius:50px;
          font-weight:bold;
        }

      </style>

    </head>

    <body>

      <h1>Lovely Aaron Essentials</h1>

      <div class="contenedor">

  `;

  productos.forEach(categoria => {

    html += `

      <div class="card">

        <h2>${categoria.categoria}</h2>

    `;

    categoria.items.forEach(producto => {

      html += `

        <div class="producto">

          <img src="${producto.imagen}" alt="${producto.nombre}">

          <p>${producto.nombre}</p>

          <p class="precio">${producto.precio}</p>

        </div>

      `;

    });

    html += `</div>`;

  });

  html += `

      </div>

      <center>
        <a href="/">⬅ Volver al inicio</a>
      </center>

    </body>

  </html>

  `;

  res.send(html);

});

module.exports = router;