const route=require('express').Router()
const products=require('../db/model.js').products


route.get('/',(req,res)=>{
    products.findAll().then(pro=>{
        res.render('products.hbs',{pro})

    })
})


exports=module.exports=route