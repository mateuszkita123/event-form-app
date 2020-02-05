let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let userSchema = require('../models/user');

// CREATE User
router.route('/').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

module.exports = router;