const cool = require('cool-ascii-faces')
const express=require('express')
const app=express();
const path = require('path')
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
res.render('pages/db', result);
client.release();
} catch (err) {
    console.error(err);
    res.send("Error " + err);
}
});
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
    .get('/cool', (req, res) => res.send(cool()))
app.listen(app.get('port'),()=>{
    console.log('server is listening at port 3030')
})