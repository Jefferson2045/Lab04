const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/about',(req,res) => {
    res.sendFile('./static/productos.html', {
        root: __dirname
    })
})
app.get('/contact',(req,res) => {
    res.sendFile('./static/clientes.html', {
        root: __dirname
    })
})

app.use((req,res) => {
    res.status(404).send('No se encontró la página que estás buscando.')
})

app.listen(5000)
console.log(`Server on port ${5000}`)
