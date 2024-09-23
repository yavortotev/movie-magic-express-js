const {urlencoded, static:staticHnadler} = require('express')


function configExpress(app) {

    //TODO we can add middlewheres here !!!

    app.use(urlencoded({ extended: true }))
    app.use('/static', staticHnadler('static'))

}


module.exports = { configExpress }