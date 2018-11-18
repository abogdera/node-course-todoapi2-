var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');
var _ = require('lodash')



var {mongoose}=require('./db/mongoose.js')
var {Todo}=require('./models/todo.js')
var {User}=require('./models/user.js')

var app=express();

const port =process.env.PORT || 3000;

app.use(bodyParser.json())
app.post('/todo3',(req,res)=>{
  var todo=new Todo({
  //console.log(req.body)
  text:req.body.text
  })


  todo.save().then((doc)=>{
        res.send(doc)

  },
  (e)=>{
    res.status(400).send(e)

  })


  
})

app.get('/todo3',(req,res)=>{

  Todo.find().then((todos)=>{
    res.send({todos})
},
  (e)=>{
    res.status(400).send(e)
  })

})

app.get('/todo3/:id',(req,res)=>{
  var id =req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
  if(!todo){
    return res.status(404).send();
  }
  res.send({todo})

  }).catch((e)=>{
    res.status(400).send()
  })
///res.send(req.params)

})


app.delete('/todo3/:id',(req,res)=>{
var id=req.params.id

if(!ObjectID.isValid(id)){
  return res.status(404).send();
}

Todo.findByIdAndRemove(id).then((todo)=>{
  if(!todo){
    return res.status(404).send();
  }
res.send({todo});
}).catch((e)=>{

  res.status(400).send();
})
})


app.patch('/todo3/:id',(req,res)=>{
  var id =req.params.id
  var body= _.pick(req.body,['text','completed'])
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  
  if(_.isBoolean(body.completed)&& body.completed){
      body.completedAt=new Date().getTime()
  }else{
      body.completed=false;
      body.completedAt=null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true})
  .then((todo)=>{
    if(!todo){
      return res.status(404).send()

    }

    res.send({todo})
  })
  
  
  .catch((e)=>{res.status(400).send()})

})

app.listen(port,()=>{
  console.log(`started on port ${port}`);
})


module.exports={app}
