var express = require('express');
var router = express.Router();
const db = require('../models')

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll().then(allFaves =>{
    console.log(allFaves)

    res.render('faves', { pokemon:allFaves })
  })
  // res.send('Render a page of favorites here');
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // console.log(req.body)
  // TODO: Get form data and add a new record to DB
  db.pokemon.create(req.body).then(newFave =>{
    console.log(newFave)
    res.redirect('/', )
  })
});

db.pokemon.destroy({
  where: { }
}).then(function() {
  // do something when done deleting
});

module.exports = router;
