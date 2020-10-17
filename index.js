require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const db = require('./models');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

// GET / - main index of site
app.get('/', function(req, res) {
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/';
  // Use request to call the API
  axios.get(pokemonUrl).then( function(apiResponse) {
    var pokemon = apiResponse.data.results;
    // console.log(pokemon[0].url)
    axios.get(pokemon[0].url).then((apiRes)=>{
      console.log(apiRes.data.sprites)
      pokeImg = apiRes.data.sprites.front_default
      res.render('index', { pokemon: pokemon.slice(0, 151),  img: pokeImg });
    })
  })
});

// Imports all routes from the pokemon routes file
app.use('/pokemon', require('./routes/pokemon'));

var server = app.listen(port, function() {
  console.log('...listening on', port );
});



module.exports = server;
