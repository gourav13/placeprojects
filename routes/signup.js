const route=require('express').Router()
const User=require('../db/model.js').user
route.get('/',(req,res)=>{
    res.render('signup.hbs')
})

route.post('/', (req, res) => {
    User.create({
        username: req.body.fname,
        password: req.body.password
    }).then((user) => {
        res.redirect('/login')
    })
})

exports=module.exports=route
