const route=require('express').Router()
const passport = require('../passport')

route.get('/',(req,res)=>{
     res.render('login.hbs');
})

route.post('/', passport.authenticate('local'), (req,res)=>
{
    console.log(req.user)
    console.log(req.user.username)
res.render('addproducts.hbs')
})

exports=module.exports=route