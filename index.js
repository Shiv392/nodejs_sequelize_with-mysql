const express=require('express');
const app=express();
const customer=require('./model/customers.js');
const order=require('./model/order.js');
const sequelize=require('./util/database.js');

customer.hasMany(order);


let customerId=null;
sequelize.sync({force:true}).then((res)=>{
    return customer.create({name:"shivsoni",email:"sonishiv309@gmail.com"})
    console.log(res)
}).then(customer=>{
    customerId=customer.id;
    console.log(customer);
    return customer.createOrder({total:45})
}).then(order=>{
    console.log(order);
    return order.findAll({where:customerId})
}).then(order=>{
    console.log(order);
})
.catch(err=>console.log(err))