const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Please enter an email']
    },
    password: {
      type: String,
      required: [true, "Please enter an password"],
    },

});

// fire a function before user is saved to db
userSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function( email, password ){
  const user = await this.findOne({ email });
  if(user){
    return user;
  }
  throw Error('incorrect ID');
}

const User = mongoose.model('User', userSchema);

module.exports = User;