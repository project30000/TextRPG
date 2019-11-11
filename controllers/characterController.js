const db = require("../models");
// console.log(db.Character);÷

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Character
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    
    
    db.Character
      .findById(req.params)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // res.send(JSON.stringify(req.body, null, 2))
    console.log(req.body);
    
    db.Character
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Character
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Character
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
