var mongoose=require('mongoose');
var user=mongoose.model('User',{
  email:{
  type:String,
  required:true,
  trim:true,
  minLength:1
  
  }}
  
  );
  module.exports={user};