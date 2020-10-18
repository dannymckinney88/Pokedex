var express = require('express');
var router = express.Router();
const axios = require('axios'); 
const db = require('../models');
const { default: Axios } = require('axios');


router.get('/', function(req, res) {
    let currentPokemon = req.query.name
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
    console.log(req.query.name)
    axios.get(apiUrl).then(pokeData =>{
        console.log(pokeData.data.stats[0].stat.name)
        res.render('details', { pokemon: pokeData.data})
    })
});

router.post('/', function(req, res) {
    
});


module.exports = router;
