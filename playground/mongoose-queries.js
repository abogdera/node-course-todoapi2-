const {mongoose}=require('./../server/db/mongoose');
const {ObjectID}=require('mongodb');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
var id="5be6f9d12ad79f3be020512f";

/*if(!ObjectID.isValid(id)){
  console.log('id not valid')
}*/
 User.find().then((user)=>{
  console.log('user ----1----find',user)
})

User.findOne({_id:id}).then((res)=>{
  console.log('user---2----- findone',res)
}) 

User.findById(id).then((res)=>{
  if(!res){
    return console.log('id not found')
  }
  console.log('user---3----- by id',res)
}).catch((e)=>{
  console.log(e);
})