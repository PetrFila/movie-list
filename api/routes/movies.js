const express = require('express');
const Movie = require('../model/movie.js')
const Person = require('../model/person');

const router = express.Router()
//const render = (movies) => {res.json({movies}) };

router.get('/', (req, res) => {
  Movie.find()
    .populate('director')
    .populate('crew.person')
    .populate('cast.actor')
    .populate('cast.character')
    .then(movies => {
      console.log("movies are: ", movies);
      res.json(movies);
    })
    .catch(error => res.json({error}))

});


router.post('/', (req, res) => {
  Movie.create(req.body)
    .then((movie) => {
      res.status(201).json(movie).end();
    })
    .catch(error => res.json({ error }))
});

module.exports = router;
