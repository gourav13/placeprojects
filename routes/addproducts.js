const route=require('express').Router()
const product=require('../db/model.js').products
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')

route.get('/',(req,res)=>{

     res.render('addproducts.hbs')
})
route.post('/',(req,res)=>
{
    product.create({
        pname:req.body.pname,
        pprice:req.body.pprice,
        idd:req.body.pname,

    }).then((p)=>{
        console.log('---------------------------------------------------------------------------------------------------------')

      //  console.log(p)
        console.log('---------------------------------------------------------------------------------------------------------')
        res.redirect('/addproducts')
    })

})


exports=module.exports=route