const express = require('express')
const handlebars = require('express-handlebars')
const { configHbs } = require('./confic/hbs')
const { configExpress } = require('./confic/express')
const { router } = require('./confic/routes')
const { configDatabse } = require('./confic/database')


// ako imame deployment - cobst PORT = process.env.PORT || 3000
const PORT = 3000
const app = express()


async function start() {

    await configDatabse()
    configHbs(app)
    configExpress(app)
    app.use(router)

    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    })
}

start()