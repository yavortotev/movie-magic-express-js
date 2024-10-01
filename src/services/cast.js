const { Cast } = require('../models/Cast')


async function createCast(castData) {

    const cast = new Cast({

        name: castData.name,
        age: castData.age,
        born: castData.born,
        nameInMovie: castData.nameInMovie,
        imageURL: castData.imageURL,
        movie: castData.movie // TODO da se mahane 
        
    })

    await cast.save() 
    return cast
}

async function getAllCast() {

}

module.exports = {
    createCast,
    getAllCast
}