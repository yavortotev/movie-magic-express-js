const { getAllMovies, getMoviesById } = require('../services/movie')


const jwt = require('jsonwebtoken')
const { login } = require('../services/user');
const movie = require('./movie');


module.exports = {



    home: async (req, res) => {

       
       //TODO and Read and learn !!!1
        // console.log(req.user);
        

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

    //  const token =req.cookies.token
    //  console.log(req.cookies);
     
    //  const data= jwt.verify(token,'secret')
    //  console.log(data);
     //TODO da vidiaza6to kato e ok dava grehska 
        
         
        const movies = await getAllMovies()
        

        for (const movie of movies) {  // tuka minavame prez vsik4i filmi pri login or register i slagame na koi sme avotri na koi ne v sasiiata !!!!
            movie.isAuthor = req.user && req.user._id.toString() === movie.author?.toString(); // Use 'of' to iterate over elements directly tove e best choiuse zadaljitelno s for off !!!
    
        
        }

       
        



        res.render('home', { movies })
    },




    details: async (req, res) => {

        const id = req.params.id


        const movie = await getMoviesById(id)

        if (!movie) {
            res.render('404')
            return
        }


       //  const isAuthor = (req.user) && (req.user._id.toString() === movie.author.toString()); proveriavenm dalei e autor i psllesi go slagame drirekno na movito kato prompreti koeoto 6te darji true or false 
         

        
        
       movie.isAuthor = req.user?._id?.toString() === movie.author?.toString();
       // console.log(movie.isAuthor);
         
        
        
  
        movie.starRating = '&#x2605'.repeat(movie.rating)

        res.render('details', { movie }) // slagame si tuka isAuthor i tuk si injektiram vsi4ko koetoiskame da polzvame v template i v controllers !!!
    },

   
   
   
   
    search: (req, res) => {
        res.render('search')

    }

} 