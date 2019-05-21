const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.record
const authenticated = require('../config/auth')


router.get('/', authenticated, (req, res) => {
  Record.findAll({ where: { UserId: req.user.id } }).then(records => {
    res.render('index', { records: records })
  })
})




module.exports = router