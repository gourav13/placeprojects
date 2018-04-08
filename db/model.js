const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

const db=new sequelize('userdata','username','userpass',
{
    dialect :'mysql'

}
)

const user=db.define('usertable',{
    fname:{
        type:datatypes.STRING,
        allowNull:false
    },
    password:datatypes.STRING

})
const products=db.define('producttable',{
    pname:{
        type:datatypes.STRING,
        allowNull:false
    },
    pprice:datatypes.STRING

})
db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    user,
    products,
}