const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

mongoose.connect('Insert your connection string from MongoDB Atlas here');

//<-----------Insert document using .save()----------->
const newUser = new User({
  name: 'John',
  age: 25,
  hobbies: ['coding', 'eating'],
  isAdmin: false,
  createdAt: Date.now(),
  address: {
    houseNumber: 65,
    street: 'Sesame street',
  },
});

async function createUser() {
  try {
    await newUser.save();
  } catch (error) {
    console.log(error.message);
  }
}

createUser();

//<-----------Insert document using .create()----------->
async function createUser2() {
  try {
    await User.create({
      name: 'Max',
      email: 'Max@GmaIL.Com',
      roles: 'buyer',
      age: 20,
      hobbies: ['coding', 'eating'],
      isAdmin: false,
      address: {
        houseNumber: 65,
        street: 'Sesame street',
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

createUser2();

//<-----------Embedding another document----------->
async function createPost() {
  try {
    await Post.create({
      title: 'Post one',
      description: 'This is a post!',
      user: '6480783caf6133c2606cd377',
    });
  } catch (error) {
    console.log(error.message);
  }
}

createPost();

//<-----------Populating the embedded document----------->
async function populate() {
  try {
    const post = await Post.findById('64807fb0553290d6a6d6ad20').populate(
      'user',
      'name age'
    );
    console.log(post);
  } catch (error) {
    console.log(error.message);
  }
}

populate();

//<-----------Querying example----------->
async function query() {
  try {
    const user = await User.where('age').gt(21).where('name').equals('John');
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

query();
