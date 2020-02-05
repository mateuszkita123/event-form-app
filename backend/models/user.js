const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstname: {
    type: String
  },
  lasttname: {
    type: String
  },
  email: {
    type: String
  },
  date: {
    type: Date
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema)