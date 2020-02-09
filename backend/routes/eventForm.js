let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let userSchema = require('../models/User');

// READ Users
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("getting all users data: ", data)
      res.json(data)
    }
  })
})

// CREATE User
router.route('/add-user-data').post((req, res, next) => {
  console.log("req.body: ", req.body);
  console.log("userSchema: ", userSchema);
  userSchema.create(req.body, (error, data) => {
    if (error) {
      console.log("error while saving to db: ", error);
      return next(error)
    } else {
      console.log("created user with data: ", data)
      res.json(data)
    }
  })
});

module.exports = router;