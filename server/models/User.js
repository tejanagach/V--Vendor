const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cart: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
