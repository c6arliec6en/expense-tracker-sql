const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')


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


app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes/home'))
app.use('/users', require('./routes/user'))
app.use('/records', require('./routes/record'))

app.listen(port, () => {
  db.sequelize.sync()
  console.log('Port 3000 Running')
})