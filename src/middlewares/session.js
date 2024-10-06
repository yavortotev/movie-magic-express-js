const { verifyToken } = require('../services/token')


function session() {  // TODO tova 6te injektirame predi da se ipalniat controlerite za vsieka sesia i se slaga v express js sled  cookie parsera !!!

    return function (req, res, next) {
         console.log('dsdsadsadasdsad');
         
        const token = req.cookies.token
        console.log(token);
        

        if (token) {
            try {
                const payload = verifyToken(token)
                req.user = payload
            } catch (err) {
                res.clearCookie('token')

            }
        }
 
        next()
    }

}

module.exports = {
    session,

}