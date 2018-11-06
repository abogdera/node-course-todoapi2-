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
 
 /* db.collection('Todo').deleteMany({text:'eat brk'}).then((result)=>{

  console.log(result)
} */
 
/* db.collection('Todo').findOneAndDelete({completed:false}).then((result)=>{

  console.log(result)
} 


) */

db.collection('users').findOneAndDelete({
  _id:new ObjectID("5be0d3e1aa10504a7ca775c8")
}).then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2))
})


client.close();
});  
 