const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const dbConnection = require('./connection');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const routes = require('./routes')
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

//Mongoose DB Connection
mongoose.Promise = global.Promise




// Sessions
app.use(
    session({
        secret: 'special-harkening', //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false //required
    })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

//Routes
app.get("/characters", (req, res) => {
    db.Character
        .find({ key: req.query.name })
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

app.get("/characters/id/:id", (req, res) => {
    db.Character
        .findById({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

//find character by looking at user id and character name
app.get("/characters/:name", (req, res) => {
    db.Character
        .findOne({name: req.params.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// get user characters
app.get("/userscore", (req, res) => {
    
    db.Character
        .find({ user_id: req.session.passport.user._id })
        .then(dbModel => res.json(dbModel))        
        .catch(err => res.status(422).json(err));
})

app.delete("/characters/:id", (req, res) => {
    db.Character
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

//works!!!
app.post("/characters/:name", (req, res) => {
    console.log("user id")
    console.log(req.session.passport.user._id)
    newCharater = {
        name: req.params.name, 
        user_id: req.session.passport.user._id
    }

    db.Character
        .create(newCharater)
        .then(dbModel => {
            res.json(dbModel)
            // return db.Character.findOneAndUpdate({ _id: dbModel._id }, { $push: { user_id: req.session.user.id } }, { new: true })
        })
        .catch(err => res.status(422).json(err));
    
})


app.put("/characters/:name/:killCount", (req, res) => {
    db.Character
      .findOneAndUpdate(({ user_id: req.session.passport.user._id}, {name: req.params.name}),{killCount: req.params.killCount})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  })

app.use(express.static(path.join(__dirname, "client", "build")))
// Routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use('/user', user)



app.use(routes);


// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
