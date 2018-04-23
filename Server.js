let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')

let personRoutes = require('./routes/personRoutes')
let greetingRoutes = require('./routes/greetingRoutes')

let port = process.env.PORT || 3000

var app = express()
app.use(morgan('dev'))

app.use('*', (req, res, next) =>{

	//Hier komt de applicatie als eerst
	next()
})

app.use('/api/', personRoutes)
app.post('/api/', personRoutes)
app.use('/', greetingRoutes)

app.use('*', (req, res, next) =>{

	let message = {
		error: "Het endpoint bestaat niet"
	}

	next(message)
})

app.use((err, req, res, next) => {
	console.log("Catch-all error handler was called")
	console.log(err)

	res.status(404).json(err).end()
})

app.listen(port, () => {
	console.log("De server draait en luistert op poort: " + port);
})

module.exports = app
