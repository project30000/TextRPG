const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/characters"
);

const characterSeed = [
  {
    "name": "enemy1",
    "killCount": 0
  },
  {
    "name": "enemy2",
    "killCount": 0
  },
  {
    "name": "enemy3",
    "killCount": 0
  },
  {
    "name": "enemy4",
    "killCount": 0
  },
  {
    "name": "enemy5",
    "killCount": 0
  },
  
];


db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
