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
app.use(express.static(__dirname + '/public/'));

// GET / - main index of site
app.get('/', function(req, res) {
  const pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
  // Use request to call the API
  axios.get(pokemonUrl).then( function(apiResponse) {
    const pokemon = apiResponse.data.results;
    // console.log(apiResponse.data)
    axios.get(pokemon[1].url).then((apiRes)=>{
      // console.log(apiRes.data.sprites)
      res.render('index', { pokemon: pokemon.slice(0, 151), });
    })
  })
});

// Imports all routes from the pokemon routes file
app.use('/pokemon', require('./routes/pokemon'));
app.use('/details', require('./routes/details'));
app.use('/delete', require('./routes/delete'));

var server = app.listen(port, function() {
  // console.log('...listening on', port );
});

module.exports = server;