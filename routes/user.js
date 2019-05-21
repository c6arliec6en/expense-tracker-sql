const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { console.log(err) }
    if (!user) {
      // req.flash('warning_msg', info.message)
      return res.redirect('/users/login')
    }
    req.logIn(user, (err) => {
      if (err) { console.log(err) }
      return res.redirect('/')
    })
  })(req, res, next)
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body

  const errors = []

  if (password !== confirmPassword) {
    errors.push({ message: 'Password confirm failure' })
  }

  User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      errors.push({ message: 'The email already be registered' })
      res.render('register', { name, email, password, confirmPassword, errors })
    } else {
      const newUser = new User({
        name,
        email,
        password,
      })
      bcrypt.genSalt(10, (err, salt) => [
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash

          newUser.save().then(user => {
            return res.redirect('/users/login')
          }).catch(err => {
            console.log(err)
          })
        })
      ])

    }
  })
})

router.post('/logout', (req, res) => {
  req.logout()
  return res.redirect('/users/login')
})

module.exports = router