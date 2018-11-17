const expect=require('expect')
const request=require('supertest')
var {ObjectID}=require('mongodb');

const {app}=require('./../server')
const {Todo}=require('./../models/todo')

const tod3=[{
  _id:new ObjectID(),
text:'first todo'

},
{
  _id:new ObjectID(),
  text:'second todo'

}]

beforeEach((done)=>{
Todo.remove({}).then(()=>{
  return Todo.insertMany(tod3)
  }
  ).then(()=> done())

})


describe('post /todos',()=>{
    it('should createe new todo',(done)=>{
      var text= 'test for text';
      request(app)
      .post('/todo3')
      .send({text})
      .expect(200)
      .expect((res)=>{
        expect(res.body.text).toBe(text);
      }).end((err,res)=>{
        if (err){
        return done(err);
        }

        Todo.find({text}).then((todox)=>{
          expect(todox.length).toBe(1);
          expect(todox[0].text).toBe(text);
          done();
        }).catch((e)=>done(e))

      })




    });


    it('should not creat any todo',(done)=>{
     request(app)
     .post('/todo3')
     .send({})
     .expect(400)
     .end((err,res)=>{
              if(err){
                return done(err);
              }
              
              Todo.find().then((todotable)=>{
                expect(todotable.length).toBe(2);
                done();
              }).catch((e)=>done(e))


            })


    })
});

describe('Get todo',()=>{

it('should get all todo',(done)=>{

  request(app)
  .get('/todo3')
  .expect(200)
  .expect((res)=>{

    expect(res.body.todos.length).toBe(2);
  })
  .end(done);
})


})

describe('test get todo id',()=>{
it ('should return todo doc',(done)=>{
  request(app)
  .get(`/todo3/:${tod3[0]._id.toHexString()}`)
  .expect(200)
  .expect((res)=>{
    
    expect(res.body.todo.text).toBe(tod3[0].text)
  })
  .end(done);

})

it('should ret 404 if todo not found',(done)=>{

var hexId=new ObjectID().toHexString();
request(app)
.get(`/todo3/:${hexId}`)
.expect(404)
.end(done);


});

it('return 404 for non object id',(done)=>{

  request(app)
  .get(`/todo3/123rew`)
  .expect(404)
  .end(done);
  
})


})