const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.record

router.get('/', (req, res, next) => {
  let month = req.query.month || false
  let category = req.query.category || { $exists: true }

  Record.findAll({ where: { category: category, userId: req.user.id } }).then(records => {
    records = records.filter(record => {
      if (month) {
        return record.date.slice(5, 7) === month
      }
      return true
    })
    res.render('index', { records, month, category })
  })
})

module.exports = router