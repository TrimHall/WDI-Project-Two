const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

userSchema.methods.validatePassword = function(password) {
  // check the password we've been given in plain text
  // against the hash in the DB
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function(next) {
  console.log('pre-validate hook has happened');
  if(this._passwordConfirmation !== this.password) {
    console.log('passwords did not match');
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next(); // we've finished so mongoose can do the next thing in the lifecycle
});

userSchema.post('validate', function() {
  console.log('post-validate hook has happened');
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

userSchema.post('save', function() {
  console.log('post-save hook has happened');
});




module.exports = mongoose.model('user', userSchema);
