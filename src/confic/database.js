const mongoose = require('mongoose')
require('../models/Movie') 
require('../models/Cast') 
require('../models/User')  // pribaviame si modelite v bazata  


const  connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDatabse() {
    
    await mongoose.connect(connectionString)

    console.log('Database connected')
    
}


module.exports = {
    configDatabse
}