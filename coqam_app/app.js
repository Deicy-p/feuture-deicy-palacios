
import express from "express";

const app = express ()
const port = 3000

app.get ('/', (req, res)=>{
    res.send("BIENVENIDO A LA PAGINA DE TIENDA VIRTUAL DE BELLEZA")

} )

app.listen(port, ()=>{
    console.log(`Aplicaciòn de ejemplo ${port}`)

})

