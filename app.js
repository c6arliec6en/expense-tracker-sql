const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')

const db = require('./models')


app.use(session({
  secret: 'secret key'
}))

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port, () => {
  db.sequelize.sync()
  console.log('Port 3000 Running')
})