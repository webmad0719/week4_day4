const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')




//http://localhost:3000/users/98749764
app.get('/users/:id', (req, res) => res.send(req.params))

//http://localhost:3000/flights/mad/bcn
app.get('/flights/:from/:to', (req, res) => {
    console.log(`Cuidad de origen: ${req.params.from}`, `Cuidad de destino: ${req.params.to}`)
    res.send(req.params)
})

//http://localhost:3000/travel/car/cities/mad/bcn
app.get('/travel/:transport/cities/:from/:to', (req, res) => {
    console.log(`Medio de transporte: ${req.params.transport}`, `Cuidad de origen: ${req.params.from}`, `Cuidad de destino: ${req.params.to}`)
    res.send(req.params)
})

// http://localhost:3000/winter-season?item=abrigo&color=red&size=XXL
app.get('/winter-season', (req, res) => {
    console.log(`Prenda de tipo ${req.query.item}, color ${req.query.color}, talla ${req.query.size}`)
    res.send(req.query)
})




// Envío de formulario GET
app.get('/search-flights', (req, res) => res.render('flights-form'))
app.get('/show-flights-results', (req, res) => {
    res.send(req.query)
    console.log(`Viaje desde ${req.query.city}, del  ${req.query.from} al ${req.query.to}`)
})



app.listen(3000, () => console.log('App listening on port 3000!'))