require('./db/mongose')
const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const productRouter = require('./routes/product')
app.use(productRouter)

app.get('*', function (req, res) {
    res.send('404 page not found')
})
 
app.listen(port, () => {
    console.log("server run port 3000");
})