//const mongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');

//obj=new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp2',(err,client)=>{
if (err){
return console.log('unable to connect to servr')
}

console.log('connected to servr')
 const db=client.db('ToDoApp2');
 /* db.collection('Todo').findOneAndUpdate({
   _id:new ObjectID('5be0d8df51cb7315963bf383')
 },{
 $set: {
   completed:false
 }
},{
  returnOriginal:false
}).then((res)=>{
  console.log(res)
}) */

db.collection('users').findOneAndUpdate({name:'sohib'},{
  $set:{
    name: 'sohib abogdera'
  },
  $inc:{
    age:15
  }


},{returnOriginal:false}).then((res)=>{
  console.log(res)
})
 





client.close();
});  
 