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
/*db.collection('Todo').insertOne({
text:'go vacation',
completed:false

},(err, result)=>{
  if (err){
    return console.log('unable to insert records',err);
  }
  console.log(JSON.stringify(result.ops),undefined,2);


})
 */
/* db.collection('users').insertOne({
  
  name: 'adel44',
  age:25,
  location:"denver"

},(err, result)=>{
  if (err){
    return console.log('unable to insert records',err);
  }
  console.log(result.ops[0]._id,'-------------',result.ops[0]._id.getTimestamp());


}) */

client.close();
});
