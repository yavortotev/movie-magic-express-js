const { getMoviesById, attachCastToMovie } = require("../services/movie")
const { getAllCast } = require('../services/cast')

module.exports = {
    attachGet: async (req, res) => {

        const id = req.params.id
        const movie = await getMoviesById(id)

        if (!movie) {
            res.render('404')
            return
        }

        


        const allCast = await getAllCast()
        
        console.log(movie);
        console.log(allCast);



       

     //res.render('cast-attach', { movie, allCast })

         // if I want to make if the cast is all ready in cast array =  to not show up in teh chouses of cast       
        let castInMovie = movie.cast.map(cast => cast._id.toString());
        
        res.render('cast-attach', {
        movie,
        allCast: allCast.filter(c => !castInMovie.find(castId => castId ==c._id.toString() )) });
        //TODO just find a bug to fix it latter when you go to atach the cast and if you have the cast allready atached you can not see it but if you mke mistake and add jut ... defoult valu this restartr and you can now add case taht is all rewady in the movie - I willfix that when I have time !!!!!

    },

    attachPost: async (req, res) => {

        const movieId = req.params.id
        const castId = req.body.cast

        if (!movieId || !castId) {
            res.status(400).end()
            return
        }

        if (castId === 'none') {

            const movie = await getMoviesById(movieId)
            const allCast = await getAllCast()
            res.render('cast-attach', { movie, allCast, error: true });
            
            return
        }    
        
        try{
            
            await attachCastToMovie(movieId,castId)
            console.log(movieId);
          console.log('tva otdoluuuuuuuuu');
        
        }catch(error){
            res.status(400).end()
        }
        
        
          
          

          res.redirect('/details/' + movieId)
          
           
        
    }

}