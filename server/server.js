var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');



var {mongoose}=require('./db/mongoose.js')
var {Todo}=require('./models/todo.js')
var {User}=require('./models/user.js')

var app=express();
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

app.listen(3000,()=>{
  console.log('started on port 3000');
})


module.exports={app}
