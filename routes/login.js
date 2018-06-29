const route=require('express').Router()
const passport = require('../passport')

route.get('/',(req,res)=>{
    //console.log(req)
//console.log(req.error)
    // console.log(req.status+'-----')
    res.render('login.hbs');
})

route.post('/', passport.authenticate('local'), (req,res)=>
{

    console.log(req.user.username)
 res.redirect('/')
})

exports=module.exports=route