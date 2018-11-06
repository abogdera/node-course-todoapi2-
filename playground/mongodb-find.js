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
 /* db.collection('Todo').find({_id:new ObjectID("5be0c90fec09604a801aad42")}).toArray().then((doc)=>{
console.log('Todo')
console.log(JSON.stringify(doc,undefined,2))
},(err)=>{
console.log('unable to fetch data',err)
}) */

db.collection('users').find({name:'adel'}).toArray().then(
  (result)=>{
  console.log(JSON.stringify(result,undefined,2))},
  (err)=>{
console.log('unable to fetch data',err);
  }
)



/* db.collection('Todo').find().count().then((count)=>{
  console.log(`Todo count : ${count}`)
  //console.log(doc)
  },(err)=>{
  console.log('unable to fetch data',err)
  })

*/
client.close();
});  
 