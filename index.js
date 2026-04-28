import express from "express";
const app = express ();

app.get ('/', (req, res)=>{
    res.send("BIENVENIDO A LA PAGINA DE TIENDA VIRTUAL DE MAQILLAJE")

} );

app.listen(3000, ()=>{
    console.log(`servicio en espera, puerto 3000`)

})
