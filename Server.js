let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')
let personRoutes = require('./routes/personRoutes')
let greetingRoutes = require('./routes/greetingRoutes')

let app = express()

// bodyParser zorgt dat we de body uit een request kunnen gebruiken,
app.use(bodyParser.json());

// Installeer Morgan als logger
app.use(morgan('dev'));

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


let port = process.env.PORT || 3000

app.listen(port, () => {
	console.log("De server draait en luistert op poort: " + port);
})

module.exports = app
