const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

const db=new sequelize('userdata','username','userpass',
{
    dialect :'mysql'

}
)

 const user=db.define('users',{
    username:{
        type:datatypes.STRING,
        allowNull:false
    },
    password:datatypes.STRING,


})
// const products=db.define('producttable',{
//     pname:datatypes.STRING,
//     pprice:datatypes.STRING,
//     pprice:datatypes.STRING,
//     idd:datatypes.STRING,
// })
const products=db.define('products',{
    pname:datatypes.STRING,
    pprice:datatypes.INTEGER,
    id:{
     type:datatypes.INTEGER,
     autoIncrement:true,
        primaryKey:true
     }
 })

const cart=db.define('cart',{
     iid:datatypes.INTEGER,
       quantity:datatypes.INTEGER,
    user_id:datatypes.INTEGER
})
cart.belongsTo(products);
  //cart.sync({force:true});
 //products.sync({force:true});
db.sync().then(() => "Database created")

exports = module.exports = {
    cart,
    db,
    user,
    products,
}