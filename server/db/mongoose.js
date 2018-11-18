const mongoose =require('mongoose').set('debug', true);
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp2');
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp2',
  mlab: 'mongodb://abogdera:janzor1970@ds125831.mlab.com:25831/abogdera'
};

//mongoose.connect(  db.mlab ||db.localhost);
mongoose.connect(  db.localhost);
module.exports={mongoose}
