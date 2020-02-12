const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  user_email: {
    type: String
  },
  event_date: {
    type: Date
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema)