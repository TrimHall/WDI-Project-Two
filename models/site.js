const mongoose = require(mongoose);
const siteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  depth: { type: Number, required: true },
  commonSpecies: { type: String, required: true },
  dificultyLevel: { type: String, required: true }
});

module.exports = mongoose.model('site', siteSchema);
