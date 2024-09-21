const express = require('express')
const handlebars= require('express-handlebars')

const app = express()

const hbs = handlebars.create({
    extname: '.hbs'
})


app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')


app.use(express.urlencoded())
app.use('/static', express.static('static'))

app.listen(3000)