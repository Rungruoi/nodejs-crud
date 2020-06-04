const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.get('/', function (req, res) {
  	res.send("<h2>This is my first app</h2>");
})

app.get('*', function (req, res) {
    res.send('404 page not found')
})
 
app.listen(3000, () => {
    console.log("server run port 3000");
})