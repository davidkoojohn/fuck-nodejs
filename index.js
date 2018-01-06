
const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const routes = require('./routes')
const pkg = require('./package')

const app = express()

// set views dir
app.set('views', path.join(__dirname, 'views'))
// set views engine
app.set('view engine', 'ejs')

// set static
app.use(express.static(path.join(__dirname, 'public')))

// session
app.use(session({
  name: config.session.key,
  scret: config.session.scret,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: config.session.maxAge
  },
  store: new MongoStore({
    url: config.mongodb
  })
}))

// flash
app.use(flash())

// routes
routes(app)

app.listen(config.port, function () {
  console.log(`${pkg.name} listen on port ${config.port}`)
})





