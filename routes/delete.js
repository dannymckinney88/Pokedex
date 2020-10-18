const express = require('express');
const router = express.Router();
const db = require('../models')
const methodOverride = require('method-override')

// middleware
router.use(methodOverride('_method'))




router.delete('/', function(req, res) {
    const pokemonName = req.body.name
    db.pokemon.destroy({
        where: { name: pokemonName }
      }).then(function() {
        // do something when done deleting
        res.redirect('/pokemon')
      });

  });
  



module.exports = router;
