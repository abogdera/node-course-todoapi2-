const {mongoose}=require('./../server/db/mongoose');
const {ObjectID}=require('mongodb');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
var id="5be6f9d12ad79f3be020512f";

/* Todo.remove({}).then((res)=>{
  console.log(res)
})
 */
Todo.findOneAndRemove({_id:'5bf0cff02a9b1c6f3420bc34'}).then((todo)=>{

  console.log(todo)
})