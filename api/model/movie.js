const mongoose = require ('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/movies'); //default port

const db = mongoose.connection;

const movieSchema = mongoose.Schema({
  title: String,
  yearRelease: Number,
  star: String
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
