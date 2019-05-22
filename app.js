const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const helpers = require('handlebars-helpers')()


if (process.env.NODE_ENV !== 'production') {      // 如果不是 production 模式
  require('dotenv').config()                      // 使用 dotenv 讀取 .env 檔案
}


const db = require('./models')


app.use(session({
  secret: 'secret key',
  resave: 'false',
  saveUninitialized: 'false',
}))


app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)


app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  // res.locals.success_msg = req.flash('success_msg')
  // res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use('/', express.static('public'))

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes/home'))
app.use('/users', require('./routes/user'))
app.use('/records', require('./routes/record'))
app.use('/auth', require('./routes/auth'))
app.use('/filter', require('./routes/filter'))

app.listen(port, () => {
  db.sequelize.sync()
  console.log('Port 3000 Running')
})