
const route=require('express').Router();
const cartitem=require('../db/model.js').cart
const product=require('../db/model.js').products
const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes
const Op = sequelize.Op
 route.get('/',(req,res)=> {
     cartitem.findAll({
     where: { quantity: {[Op.gt]: 0},user_id:req.user.id },
         include: [
         { model: product}
     ]
 }).then(function(item) {
     if(item)
     {console.log(item+'yyyyyyyyyyyyyykkkkkkkkkkkkkkkkkkkkkyyyyyyyyyyyyyyyy')
   //  res.send(item);
     res.render('your_cart.hbs',{item})
     }
     else
         res.render('front.hbs')
 });
 })




route.post('/',(req,res)=>{
  if(!req.user)
  {
      res.sendStatus(200)
  }
     cartitem.findOrCreate({where:{producttableId:req.body.iiid,user_id:req.user.id}}).spread((user,created)=>{
         if(created==true)
{     cartitem.update({ quantity:1 }, { where: {producttableId :req.body.iiid } }); }
     else
         { cartitem.update({ quantity: sequelize.literal('quantity + 1') }, { where: { producttableId:req.body.iiid,user_id:req.user.id } });}
})



})


exports=module.exports=route
