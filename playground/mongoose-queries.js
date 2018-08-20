const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

let id = '5b7ace459788e051a722f53e';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todos', todo);
// });

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo by id', todo);
  })
  .catch(e => console.log(e));
