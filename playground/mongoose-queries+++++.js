const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/models/todo')
const {User}=require('./../server/models/user')
const {ObjectID} =require('mongodb');

var id='5be8d61dc5af64325838b31';


if (!ObjectID.isValid(id)){
  console.log('id not valid');
}
/*Todo.find({
  _id:id
}).then((todos)=>{

console.log('Todos',todos);

})

Todo.findOne({
  _id:id
}).then((todo1)=>{

console.log('Todo',todo1);

})*/
/*Todo.findById(id).then((todo1)=>{
if (!todo1){
  return console.log("not found");
}
  console.log('Todo',todo1);
  
  }).catch((e)=>{
    console.log(e);
  })*/
  User.findById('5be8d61dc5af64325838b312').then((user)=>{
    if(!user){
      return console.log("user not found");
    }
    console.log(JSON(user,undefined,2))
  },
  (e)=>{
   console.log(e)
  })