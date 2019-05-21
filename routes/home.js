const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record
const authenticated = require('../config/auth')


router.get('/', authenticated, (req, res) => {
  res.render('index')
})




module.exports = router