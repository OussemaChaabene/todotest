const mongo=require('mongoose');
const schema=mongo.Schema;

const todoSchema=new schema({   
    name:String,
    matricule:String,
    score: Number,
    status:Boolean,
    email_user:String

});

module.exports=mongo.model('todo',todoSchema); 
