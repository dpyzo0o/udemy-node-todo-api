const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// Todo.remove({}).then(res => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5b7bc68bbf5e20a404b57351').then(todo => {
  console.log(todo);
});
