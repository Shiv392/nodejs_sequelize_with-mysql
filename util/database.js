const Sequelize=require('sequelize');

const sequelize=new Sequelize('sequelize','root','Shiv@3923',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;