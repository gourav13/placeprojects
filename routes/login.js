const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send('welcome to login page')
})

exports=module.exports=route