const express = require('express')
const handlebars= require('express-handlebars')
const { configHbs } = require('./confic/hbs')
const { configExpress } = require('./confic/express')
const { router } = require('./confic/routes')

const PORT = 3000
// ako imame deployment - cobst PORT = process.env.PORT || 3000

const app = express()

configHbs(app)
configExpress(app)
app.use(router)






app.listen(PORT)  