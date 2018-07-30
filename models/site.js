const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  name: { type: String},
  location: { type: String},
  depth: { type: Number},
  commonSpecies: { type: String},
  dificultyLevel: { type: String}
});

module.exports = mongoose.model('Site', siteSchema);
