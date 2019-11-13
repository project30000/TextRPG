const db = require("../models");
// console.log(db.Character);÷

// Defining methods for the booksController
module.exports = {

  findAll: function (req, res) {
    db.Character
      .find({key: req.query.name})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    console.log("Find Me")
    db.Character
      .findById(req.params)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //need to implement
  findByName: function (req, res) {
    db.Character
      .findOne({name: req.params.name, user_id: req.parms.id})
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //populate not working
  create: function (req, res) {
    console.log("character creation")
    console.log(req.body);
    db.Character
      .create(req.body)
      .populate('User')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  //need to impleement
  update: function (req, res) {
    db.Character
      .findOneAndUpdate({ _id: req.params.id},  {killCount: req.parmas.killCount})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  remove: function (req, res) {
    db.Character
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
