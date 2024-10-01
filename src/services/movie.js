
 const { Movie } = require('../models/Movie')




async function getAllMovies() {
    
    const movies= await Movie.find().lean()
    
    return movies
     
     
}







async function getMoviesById(id) {

    
     
    const movie = await Movie.findById(id).lean();
   //TODo delete this console.log(movie);
    

    return movie

    
}

async function createMovie(movieData) {
      
     const movie = new Movie ( {  

        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageURL: movieData.imageURL,

     })

     
       await movie.save()
      
       return movie
}



module.exports = {
    getAllMovies,
    getMoviesById,
    createMovie
}




// function toMovieModel(data) {
//     const movie = new Movie

//       movie.id = data.id
//       movie.title = data.title 
//       movie.genre = data.genre 
//       movie.director = data.director 
//       movie.year = data.year 
//       movie.imageURL = data.imageURL 
//       movie.rating= data.rating
//       movie.description= data.description

//     return movie;
// }