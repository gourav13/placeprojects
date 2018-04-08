const route=require('express').Router()
const product=require('../db/model.js').product
route.get('/',(req,res)=>
{
    res.render('addproducts.hbs')
})
route.post('/',(req,res)=>
{
    product.create({
        pname:req.body.pname,
        pprice:req.body.pprice

    }).then((p)=>{
        console.log('---------------------------------------------------------------------------------------------------------')

      //  console.log(p)
        console.log('---------------------------------------------------------------------------------------------------------')
        res.redirect('/addproducts')
    })

})
exports=module.exports=route