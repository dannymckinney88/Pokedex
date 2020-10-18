var express = require('express');
var router = express.Router();
const axios = require('axios'); 
const db = require('../models');
const { default: Axios } = require('axios');


router.get('/', function(req, res) {
    let currentPokemon = req.query.name
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
    axios.get(apiUrl).then(pokeData =>{
        res.render('details', { pokemon: pokeData.data})
    })
});

router.post('/', function(req, res) {
    
});


module.exports = router;
