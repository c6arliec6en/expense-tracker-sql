const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record
const authenticated = require('../config/auth')

router.get('/new', authenticated, (req, res) => {

})

router.post('/new', authenticated, (req, res) => {

})

router.get('/edit/:id', authenticated, (req, res) => {

})

router.post('/edit/:id', authenticated, (req, res) => {

})

router.get('/delete/:id', authenticated, (req, res) => {

})




module.exports = router