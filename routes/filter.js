const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.record

router.get('/', (req, res, next) => {
  const month = req.query.month
  const category = req.query.category
  const queryObject = { where: { userId: req.user.id } }

  if (category) {
    queryObject.where.category = category
  }

  Record.findAll(queryObject).then(records => {

    records = records.filter(record => {
      return !month || new Date(record.date).getMonth() === month - 1
    })
    res.render('index', { records, month, category })

  })

})

module.exports = router