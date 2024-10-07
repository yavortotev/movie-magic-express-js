const { createMovie } = require('../services/movie');

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },

    createPost: async (req, res) => {
        
        const authorId= req.user._id        


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
    }
};