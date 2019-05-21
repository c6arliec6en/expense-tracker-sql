const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.record
const authenticated = require('../config/auth')

router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

router.post('/new', authenticated, (req, res) => {
  console.log(req.user)
  const { name, date, category, amount } = req.body
  const newRecord = new Record({
    name,
    date,
    category,
    amount,
    UserId: req.user.id
  })
  newRecord.save().then(record => {
    return res.redirect('/')
  }).catch(err => {
    console.log(err)
  })
})

router.get('/edit/:id', authenticated, (req, res) => {
  Record.findOne({ where: { id: req.params.id } }).then(record => {
    res.render('edit', { record: record })
  })
})

router.post('/edit/:id', authenticated, (req, res) => {
  const { name, date, category, amount } = req.body
  Record.findOne({ where: { id: req.params.id } }).then(record => {
    record.name = name
    record.date = date
    record.category = category
    record.amount = amount

    record.save().then(record => {
      return res.redirect('/')
    }).catch(err => {
      console.log(err)
    })
  })
})

router.get('/delete/:id', authenticated, (req, res) => {

})




module.exports = router