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

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5b6b3f09c77fe141c8e6ac28') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Tom' })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log('Unable to fetch todos', err);
        }
      );

    // client.close();
  }
);
