const express=require('express')
const app=express();
const path = require('path')
//const hbs=require('express-hbs')
var a=[1,2,3]
// app.engine('hbs',hbs.express4
// (
//     {
//         defaultLayout:path.join(__dirname,'views/layouts/front.hbs')
//     }
// ))
app.set ('port',(process.env.PORT||3030));
app.set('views engine','hbs');

app.use('/',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('front.hbs',{a})
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login',require('./routes/login.js'))
app.use('/signup',require('./routes/signup.js'))
app.use('/addproducts',require('./routes/addproducts.js'))
app.use('/products',require('./routes/products.js'))
app.use('/upload',require('./routes/upload.js'))
app.listen(app.get('port'),()=>{
    console.log('server is listening at port 3030')
})