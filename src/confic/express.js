const {urlencoded, static:staticHnadler} = require('express')
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session');

const secret= 'what a secret'

function configExpress(app) {

    //TODO we can add middlewheres here !!!

    
    app.use(cookieParser(secret))
    app.use(session())
    app.use(urlencoded({ extended: true }))
    app.use('/static', staticHnadler('static'))

}


module.exports = { configExpress }