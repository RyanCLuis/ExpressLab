// load express
const express = require('express')
const path = require('path')

// create our express app
const app = express()

// Config the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// mount middleware (app.use)

// mount routes

// define "root" in app
app.get('/', function (req, res) {
    res.send('<h1>Hello Students</h1>')
})

app.get('/home', function (req, res) {
    res.render('home')
})

app.listen(1212, function () {
    console.log('listening on port 1212')
})