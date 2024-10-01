const { createCast } = require("../services/cast")

module.exports = {
  
    createGet: (req, res)=> {
        res.render('cast-create')
    },

    createPost : async (req , res) => {

        const errors = {
            name: !req.body.name,
            age: ! req.body.age,
            born: ! req.body.born,  
            nameInMovie: !req.body.nameInMovie,
            imageURL: !req.body.imageURL,
            
        };

           //TODO console.log(errors);
            

        // Check if any errors exist
        if (Object.values(errors).includes(true)) {
            // Handle validation errors (e.g., re-render form with errors)
            res.render('cast-create', {
                errors,
                cast: req.body
            });

            return
        }

        // If validation passes, create the movie
        try {
            
            const result = await createCast(req.body);
            
            res.redirect('/details/' + result._id);



        } catch (err) {
            // Handle any errors that occur during movie creation
            res.status(500).send(err.message)
            
            
        }
    }
        
       

    
        

        

}
     
