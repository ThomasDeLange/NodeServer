let express = require('express')
let Person = require('../Model/Person')

let routes = express.Router()

routes.get('/greeting', function (req, res) {
  res.send("HALLO ALLEMAAL, WAT FIJN DAT JE ER BENT. BEN JE VOOR HET EERST HIER OF BEN JE AL BEKEND? STAMP MET JE VOETEN ZET JE HANDEN IN JE ZIJ. IK BEN ANK EN WIE BEN JIIIIIIJJJJJ")
})

module.exports = routes
