const express = require('express')
const handlebars= require('express-handlebars')

const PORT = 3000

const app = express()

const hbs = handlebars.create({
    extname: '.hbs'
})


app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')


app.use(express.urlencoded({ extended: true })) 
app.use('/static', express.static('static'))

app.listen(PORT)