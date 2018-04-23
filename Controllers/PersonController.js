//Crud operaties voor Persons

let Person = require('../Model/Person')

module.exports = {

  //Per array
  readPerson(req, res, next) {
  	let user = new Person("Thomas", "de Lange")

    res.status(200).json(user).end()
  },

  createPerson(req, res, next) {
   	let firstName = req.body.firstName
   	let lastName = req.body.lastName

   	console.log("JSON got: " + firstName + " " + lastName)

   	let newUser = new Person(firstName, lastName)
    //put in database

   	res.status(200).json(newUser).end()
  },

   updatePerson(req, res, next){
     res.status(200).json({}).end()

   },

   deletePerson(req, res, next){
       res.status(200).json({}).end()
   },

   //Per person met id
   readPersonById(req, res, next){
     let id = req.params.id

     res.status(200).json({}).end()

   },

   createPersonById(req, res, next){
     let id = req.params.id

     res.status(200).json({}).end()

   },

   updatePersonById(req, res, next){
     let id = req.params.id

     res.status(200).json({}).end()

   },
   deletePersonById(req, res, next){
     let id = req.params.id

     res.status(200).json({}).end()

   }

}
