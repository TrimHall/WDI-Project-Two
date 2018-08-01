const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  name: { type: String},
  location: { type: String},
  depth: { type: Number},
  picture: {type: String},
  commonSpecies: { type: String},
  difficultyLevel: { type: String},
  description: {type: String},
  reviews: [{ author: { type: mongoose.Schema.ObjectId, ref: 'user' }, content: String }]
});

module.exports = mongoose.model('Site', siteSchema);
