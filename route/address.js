const express=require('express');
router = express.Router();
const actionController=require('../controller/action');
router.post('/addData' , actionController.postAddData);
router.post('/delete' , actionController.postDelete);
router.get('/getAllData', actionController.getAllData);
router.post('/updateData', actionController.postUpdateData);


module.exports=router;