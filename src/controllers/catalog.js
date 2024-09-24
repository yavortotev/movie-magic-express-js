const { getAllMovies, getMoviesById } = require('../services/movie')

module.exports = {

    home: async (req, res) => {

        const movies = await getAllMovies()

        res.render('home', { movies })
    },

    details: async (req, res) => {

        const id = req.params.id

        const movie = await getMoviesById(id)

        if (!movie) {
            res.render('404')
            return
        }

        movie.starRating = '&#x2605'.repeat(movie.rating) 

        res.render('details', { movie })
    },

    search: (req, res) => {
        res.render('search')

    }

} 