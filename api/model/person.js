const mongoose = require('./base');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
  firstName: String,
  lastName: String
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
