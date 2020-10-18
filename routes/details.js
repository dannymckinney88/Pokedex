var express = require('express');
var router = express.Router();
const db = require('../models')


router.get('/', function(req, res) {
    console.log(req.query.name)
    res.send('hi')
});

router.post('/', function(req, res) {
    
});


module.exports = router;
