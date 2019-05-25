const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.record

router.get('/', (req, res, next) => {
  let month = req.query.month || false
  let category = req.query.category

  if (category === '') {
    Record.findAll({ where: { userId: req.user.id } }).then(records => {

      if (month) {
        records = records.filter(record => {
          let date = new Date(record.date)
          if (month) {
            return date.getMonth() === month - 1
          }
          return true
        })
        res.render('index', { records, month, category })
      }
    })
  } else {
    Record.findAll({ where: { category: category, userId: req.user.id } }).then(records => {

      if (month) {
        records = records.filter(record => {
          let date = new Date(record.date)
          if (month) {
            return date.getMonth() === month - 1
          }
          return true
        })
        res.render('index', { records, month, category })
      }
    })
  }

})

module.exports = router