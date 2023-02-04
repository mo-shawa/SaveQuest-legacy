var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
// require('dotenv').config()
// require('./config/database')

var app = express()

const port = process.env.PORT || 8080

app.listen(port, function () {
	console.log(`Express app is running on port ${port}`)
})

app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api/users', require('./routes/api/users'))

app.get('/*', (req, res) => {
	res.send('catch all')
})

module.exports = app
