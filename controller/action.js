const Expense = require("../model/data");

exports.postAddData = async(req,res,next) => {
    try{
    const amount= req.body.amount;
    const description= req.body.description;
    const category=req.body.category;
        const datas= await Expense.create({amount:amount, description:description, category:category});
        res.status(201).json({datas:datas})
    }
    catch(err) {
        console.log('error in adding data to db from controller');
        console.log(err);
        res.status(500).json({error:err});
    }
}

exports.postUpdateData = async(req,res,next) => {
    try{
    const amount= req.body.amount;
    const description= req.body.description;
    const category=req.body.category;
    const id = req.body.id;

    const finddata = await Expense.findByPk(id);
    console.log(finddata);
        finddata.amount = amount;
        finddata.description = description;
        finddata.category = category;
        const updateddata = await finddata.save();
        res.status(201).json({datas:updateddata});
    }
    catch(err){
        console.log('error in updating from controller');
        res.status(500).json({error:err});
    }
}

exports.postDelete = async(req,res,next) => {
    try{
        const id=req.body.id;
        const deldata= await Expense.findByPk(id);
        const data = await deldata.destroy();
        res.status(201).json({data:data});
    }
    catch(err){
        console.log('error in deleting in db from controller');
        console.log(err);
        res.status(500).json({error:err});
    }
}

exports.getAllData = async(req,res,data) => {
    try{
    const datas = await Expense.findAll();
    res.status(201).json({datas:datas});
    }
    catch(err){
        console.log('error in getting all data from controller');
        console.log(err);
        res.status(500).json({error:err});
    }
}