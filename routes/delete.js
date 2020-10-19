// require
const express = require('express');
const router = express.Router();
const db = require('../models')
const methodOverride = require('method-override')

// middleware
router.use(methodOverride('_method'))

// Delet a pokemon from the DB
router.delete('/', function(req, res) {
    const pokemonName = req.body.name
    console.log(pokemonName)
    db.pokemon.destroy({
        where:{ name: pokemonName }
      }).then(function() {
        res.redirect('/pokemon')
      });
  });
  
module.exports = router;