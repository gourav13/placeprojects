const route=require('express').Router()
const products=require('../db/model.js').products


route.get('/',(req,res)=>{
    products.findAll().then(pro=>{
        res.render('products.hbs',{pro})

if(req.user)
          console.log(req.user.username+' username  ------------------------------------------')
else
    console.log('user logout ----------------------')
    })
 })


exports=module.exports=route