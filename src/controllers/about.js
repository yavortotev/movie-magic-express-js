module.exports = {
    about : (req,res)=> {
       // res.setHeader('Set-Cookie', 'message2=getFropmAbout') //TODO ????? setvane na cookie - v message e imeto , v hello e value  setr up cookie !!!

        res.render('about')
    }
}