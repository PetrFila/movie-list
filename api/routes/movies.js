const express = require('express');
const Movie = require('../model/movie.js')

const router = express.Router()

router.get('/', (req, res) => {
  Movie.find().then((movies) => {
    res.json({movies});
  });
});

router.post('/', (req, res) => {
  // console.log("req: ", req);
  console.log("req.body: ", req.body);
  console.log("req.query: ", req.query);
  console.log("req.params: ", req.params);
  console.log("req.url: ", req.url);


  // console.log("req: ", req);

  var newMovie = new Movie(req.body);

  // add validation to check that title exists otherwise don't validate
  // and return status code indicating client side form error

  newMovie.save(function (err, movie) {
    if (err) {
      console.log("error is: ", err);
      res.status(500).json({ error: `Sorry couldn't save movie '${movie.title}'` })
    }

    res.status(201).json({ movie });

    console.log("it saved movie: ", movie);

    // Movie.findOne(req.body, 'title yearReleased star', function (err, movies) {
    //   console.log("movies found are: ", movies);
    //   console.log("error is: ", err); //return handleError(err);
    //   if (typeof movies !== null) {
    //     console.log('movie with title %s released in year %s has stars %s.', movies.title, movie.yearReleased, movies.star)
    //   }
    // })
  })


  //req.body should be in json because of parse-body middleware
  // Movie.save().then((movies) => {
  //   res.json({movies});
  // json = ...;
  //Create new movies
  //then return movie as json
  //with the correct http response code
  // res.json({});
});

module.exports = router;
