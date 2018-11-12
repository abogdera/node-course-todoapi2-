const expect =require('expect')
const request=require('supertest')

const {app}=require('./../server')
const {Todo}=require('./../models/todo')

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    done();
  })
})

describe("post /todo",()=>{

   /* it('should create new todo',(done)=>{
      var text="todo text test"
      request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res)=>{
        expect(res.body.text).tobe(text);


      }).end((err,res)=>{
        if(err){
        return done(err);
        }

        Todo.find().then((todos)=>{
          expect(todos.length).toBe(3);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=>done(e))

      })




    })*/


it('shouls not create with invalid data',(done)=>{
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(0);
        done();


      }).catch((e)=>done(e))

    })


})

})