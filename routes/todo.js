const express=require('express');
const router=express.Router();
const todo=require('../models/todo')
const {validate}=require('../midware/validators');
const todoController=require('../controller/todoController');




router.post('/', validate,todoController.createUser);
router.get('/',validate,todoController.getallUsers);
router.get('/:id',validate,todoController.getUsersById);
router.put('/:id',validate,todoController.updateUser);
router.delete('/:id',validate,todoController.deleteUser);


    


module.exports=router;