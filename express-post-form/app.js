const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')   // Necesaria para acceder a req.body!



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(whatever)

function whatever(req, res, next) {
    console.log("El middleware de mentira se ha disparado")
    req.hasPermission = false
    next()
}



app.get('/login', (req, res) => {
    req.hasPermission ? res.render('login-form') : res.send("No permitido")
})
app.post('/login', (req, res) => {
    res.send(req.body)
    console.log('El usuario es:', req.body.user, 'La contraseña es:', req.body.password)
})


app.listen(3000, () => console.log('App listening on port 3000!'))