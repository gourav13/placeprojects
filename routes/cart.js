
const route=require('express').Router();
const cartitem=require('../db/model.js').cart
const product=require('../db/model.js').products
const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

 route.get('/',(req,res)=> {

    cartitem.findAll().then(items => {
     product.findAll({
    where: {
         id: items[0].iid
    }
}).then(arr => {
    console.log('----||||||---'+arr[0].pname +'  '+arr[0].pprice+'------------------------');
    arr[1]={pprice:10,pname:'cool'};
    res.render('your_cart.hbs', {arr})
})
})
})

route.post('/',(req,res)=>{

     cartitem.findOrCreate({where:{iid:req.body.iiid}}).spread((user,created)=>{
         if(created==true)
{     cartitem.update({ quantity:1 }, { where: { iid:req.body.iiid } }); }
         else
             { cartitem.update({ quantity: sequelize.literal('quantity + 1') }, { where: { iid:req.body.iiid } });}
})
    })


exports=module.exports=route
