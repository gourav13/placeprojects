
const route=require('express').Router();
const cartitem=require('../db/model.js').cart
const product=require('../db/model.js').products
route.get('/',(req,res)=>{
      res.send('value recieved')
})

route.post('/',(req,res)=>{
    product.findAll({
    where: {
        idd: req.body.iid
    }
}).then(cart_items => {
    console.log(cart_items+cart_items[0].pprice+'-------------------------------')

})
})

exports=module.exports=route
