const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;


const CommentSchema = Schema({
  body: String
})

const person = { type: ObjectID, ref: 'Person' };

const MovieSchema = Schema({
  title: String,
  yearRelease: Number,
  star: String,
  comments: [ CommentSchema ],
  director: { type: ObjectID, ref: 'Person' },
  cast: [ { actor: person, character: person } ],
  crew: [ { person: person, role: String } ]
  // director: { type: ObjectID, ref: 'Person' },
  // cast: [ { actor: { type: ObjectID, ref: 'Person' }, character: String } ],
  // crew: [ { person: { type: ObjectID, ref: 'Person' }, role: String } ]
});


const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
