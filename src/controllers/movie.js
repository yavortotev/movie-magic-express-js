const { createMovie } = require('../services/movie');

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },

    createPost: async (req, res) => {
        // Validation
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
            // Handle validation errors (e.g., re-render form with errors)
            res.render('create', {
                errors,
                movie: req.body
            });

            return
        }

        // If validation passes, create the movie
        try {
            
            const result = await createMovie(req.body);
            
            res.redirect('/details/' + result._id);



        } catch (err) {
            // Handle any errors that occur during movie creation
            res.status(500).send(err.message)
            
            
        }
    }
};