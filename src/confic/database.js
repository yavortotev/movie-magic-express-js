
const mongoose = require('mongoose');
require('../models/Cast'); 
require('../models/Movie')
require('../models/User')

// TODO taka gi importvam pri ra4na migrazia 
// const { Movie } = require('../models/Movie');
// const { User } = require('../models/User');  // import the explicitly like this {User} ina4e go vzema celia fail 


const connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDatabse() {
    await mongoose.connect(connectionString);
   //TODO   await migrateMovies(); samo za migraciata a
    console.log('Database connected');
}



module.exports = {
    configDatabse
};


// //TODO: Manual migration - add author to existing Movies without an author
// async function migrateMovies() { 
//     const firstUser = await User.findOne();  // TODO da go nau4a super dobre !!!!!
//     await Movie.updateMany({}, { $set: { author: firstUser._id } });  
// }