const express= require('express');
const bodyParser=require('body-parser');
const sequelize=require('./util/database');
const app=express();

//using cores
var cors=require('cors');
app.use(cors());

const actionRoute=require('./route/address');


app.use(bodyParser.json({ extended: false }));

app.use(actionRoute);

sequelize.sync()
// sequelize.sync({force:true})
.then(result => {
    console.log('app started');
    app.listen(3000);
})
.catch(err=>console.log(err));