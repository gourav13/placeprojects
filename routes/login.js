const route=require('express').Router()
const passport = require('../passport')

route.get('/',(req,res)=>{
     res.render('login.hbs');
})

route.post('/', passport.authenticate('local', {
    successRedirect: '/addproducts',
    failureRedirect: '/login'
}))

exports=module.exports=route