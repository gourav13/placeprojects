const route=require('express').Router()
const products=require('../db/model.js').products
const sequelize=require('sequelize');
var Op=sequelize.Op;
route.get('/',(req,res)=>{console.log(req.query.price+'----------------IIIIIIIIIIIIIIIIIIIIIIIII')
    products.findAll({
    where: {pprice: {[Op.lt]: req.query.price},pname: {[Op.like]: req.query.name}}
}).then(pro=>{
       // res.render('products.hbs',{pro})
     res.send(pro)


    })
 })

route.post('/',(req,res)=>{console.log(req.body.price+'----------------IIIIIIIIIIIIIIIIIIIIIIIII')
products.findAll({
    where: {id: {[Op.gt]: req.body.price}}
}).then(pro=>{
    // res.render('products.hbs',{pro})
    res.send(pro)


})
})

exports=module.exports=route