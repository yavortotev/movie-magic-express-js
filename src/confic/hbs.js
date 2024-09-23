const hendlerbars =require('express-handlebars')


function configHbs(app){

    const hbs = hendlerbars.create({
        extname: '.hbs'
    })
    
    
    app.engine('.hbs', hbs.engine)
    app.set('view engine', '.hbs')



}
 

module.exports = { configHbs } 