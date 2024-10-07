
const { Movie } = require('../models/Movie')




async function getAllMovies() {

    const movies = await Movie.find().lean()

    return movies


}







async function getMoviesById(id) {



    const movie = await Movie.findById(id).lean().populate('cast');


    return movie


}

async function createMovie(movieData, authorId) {

    const movie = new Movie({

        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageURL: movieData.imageURL,
        author: authorId        // TODO tuka silagame na autora author Id koeoto idva ot createPost movie kade katovzemame dannite za filma deto si pravim vzemame i id na usera koito go pravi i go slagame v author a Id`to

    })
    
    await movie.save()

    return movie
}


async function attachCastToMovie(movieId, castId) {

    const movie = await Movie.findById(movieId)

    if(!movie){
        throw new Error (`Movie ${movieId} not found !!`)
    }

    movie.cast.push(castId)

    await movie.save()

    return movie
}







module.exports = {
    getAllMovies,
    getMoviesById,
    createMovie,
    attachCastToMovie
}




