const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos')
    //   .deleteMany({ text: 'To sleep' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // deleteOne
    // db.collection('Todos')
    //   .deleteOne({ text: 'To sleep' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // findOneAndDelete
    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users').deleteMany({ name: 'Yang' });

    db.collection('Users')
      .findOneAndDelete({ _id: 123 })
      .then(results => {
        console.log(JSON.stringify(results, undefined, 2));
      });

    // client.close();
  }
);
