const bcrypt = require('bcrypt')

const { User } = require('../models/User')



async function register(email, password) {
    //check if user exist -> throw error if true 
    //hash password
    //create DB record
    //return saved recored 

    const exisitngUser = await User.findOne({ email })

    if (exisitngUser){
        throw new Error('Email is already used')
    }
   
    const user = new User({     
        email,
        password : await bcrypt.hash(password, 10)
        
    })

     await user.save()

    return user

    
}







async function login(email, password) {
        //check if user exist -> throw error if false
        // compare hasjed password -> throw error if false 
        // return matched 
 



    
}


