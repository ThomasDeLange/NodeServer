let express = require('express')
let PersonController = require('../Controllers/PersonController')

let routes = express.Router()

routes.get('/persons', PersonController.readPerson)
routes.post('/persons',PersonController.createPerson)
routes.put('/persons', PersonController.updatePerson)
routes.delete('/persons', PersonController.deletePerson)

// routes.get('/persons/:id', PersonController.readPersonById)
// routes.post('/persons/:id',PersonController.createPersonById)
// routes.put('/persons/:id', PersonController.updatePersonById)
// routes.delete('/persons/:id', PersonController.deletePersonById)

module.exports = routes
