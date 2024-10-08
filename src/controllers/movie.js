const { createMovie, getMoviesById, updateMovie } = require('../services/movie');

module.exports = {



    createGet: (req, res) => {
        res.render('create');
    },

    createPost: async (req, res) => {

        const authorId = req.user._id


        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageURL: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };

        //TODO console.log(errors);


        // Check if any errors exist
        if (Object.values(errors).some(e => e)) {
            res.render('create', {
                errors,
                movie: req.body
            });

            return
        }

        // If validation passes, create the movie
        try {

            const result = await createMovie(req.body, authorId); //TODO slagame si cilata info za  cfreate plus author ID kade same go vzeli ot   const authorId= req.user._id   ot usera  vzemame id na usera i go slagme na authora na novia film       


            res.redirect('/details/' + result._id);



        } catch (err) {
            // Handle any errors that occur during movie creation
            res.status(500).send(err.message)


        }
    },


    editGet: async (req, res) => {
        const movieId = req.params.id;

        let movie;

        try {
            movie = await getMoviesById(movieId);

            // TODO  Check if movie exists, otherwise render the 404 page
            if (!movie) {
                return res.status(404).render('404', { message: 'Movie not found!' }); // Ensure return to stop further execution
            }

            //TODO Check if the current user is the author of the movie
            const isAuthor = req.user._id === movie.author.toString();

            // TODO If user is not the author, redirect to login
            if (!isAuthor) {
                return res.redirect('/login');
            }

            // TODORender the edit page if everything is valid
            res.render('edit', { movie });
        } catch (err) {
            console.error(err); // Log error for debugging
            //TODO Render a 500 error page for server errors
            return res.status(500).render('500', { message: 'An error occurred while retrieving the movie.' });
        }
    },


    editPost: async (req, res) => {

        const movieId = req.params.id
        const authorId = req.user._id






        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageURL: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };

        if (Object.values(errors).some(e => e)) {
            res.render('edit', { errors, movie: req.body});
            return;
        }
        try {

            await updateMovie(movieId,req.body,authorId);

            
        } catch (err) {
            if(err.message === 'Access denied!!'){
                res.redirect('/login')
            }else {
                res.render('404')
            }
            
            return
        }   

        res.redirect('/details/' + movieId)

        
        
    }
}; 