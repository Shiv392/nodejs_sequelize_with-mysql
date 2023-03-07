const Sequelize=require('sequelize');
const sequelize=require('../util/database.js');

const Customer=sequelize.define("customer",{
  Id:{
    type:Sequelize.INTEGER,
    autoIncrement : true,
    primaryKey:true,
    allowNull:false
  },
name:{
    type:Sequelize.STRING,
    allowNull:false
},
email:{
    type:Sequelize.STRING,
    allowNull:false
}
}

);
module.exports=Customer;