// load express
const express = require('express')

// create our express app
const app = express()

// Config the app (app.set)

// mount middleware (app.use)

// mount routes

// define "root" in app
app.get('/', function (req, res) {
    res.send('<h1>Hello Students</h1>')
})

app.get('/home', function (req, res) {
    res.send('<h1>Home Page</h1>')
})

app.listen(1212, function () {
    console.log('listening on port 1212')
})