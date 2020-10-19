// require
const express = require('express');
const router = express.Router();
const axios = require('axios'); 
const db = require('../models');


router.get('/', function(req, res) {
    let currentPokemon = req.query.name
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
    axios.get(apiUrl).then(pokeData =>{
        res.render('details', { pokemon: pokeData.data})
    })
});

module.exports = router;
