const { getAllMovies, getMoviesById } = require('../services/movie')


const jwt = require('jsonwebtoken')


module.exports = {



    home: async (req, res) => {

        // const headers = {  //1. headarite ns jwt 
        //     alg: 'HS256',
        //     typ: 'JWT'
        // }

        // const jwtPayloadData = {    //2. slagame datata v jwt
        //     message: 'hello'
        // }

        // const token = jwt.sign(jwtPayloadData,'secret')
        // console.log(token);
        


        // //res.cookie('message', 'hello', { httpOnly: true }) //TODO ????? setvane na cookie - v message e imeto , v hello e value , drugia na4in res.cookie('message', 'hello',{httpOnly: true})

        // res.cookie('token', token, { httpOnly: true }); //TODO  pravia go taka kogato go pravia s token 

     const token =req.cookies.token
     const data= jwt.verify(token,'secret')
     console.log(data);
     

        const movies = await getAllMovies()

        res.render('home', { movies })
    },

    details: async (req, res) => {

        const id = req.params.id
        console.log(req.params);


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