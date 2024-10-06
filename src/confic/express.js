const {urlencoded, static:staticHnadler} = require('express')
const cookieParser = require('cookie-parser');

const secret= 'what a secret'

function configExpress(app) {

    //TODO we can add middlewheres here !!!


    app.use(cookieParser(secret))
    app.use(urlencoded({ extended: true }))
    app.use('/static', staticHnadler('static'))

}


module.exports = { configExpress }