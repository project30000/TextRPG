const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const playerSchema = new Schema({

	name: { type: String, unique: true, required: true },
    health: { type: Number, unique: false, required: true },
    str: { type: Number, unique: false, required: true },
    dex: { type: Number, unique: false, required: true },
    int: { type: Number, unique: false, required: true },
    char: { type: Number, unique: false, required: true },
    // heres additional
    level: { type: Number, unique: false, required: true },
    //initalize to zero on every create
    karma: { type: Number, unique: false, required: true },
    

})

const Player = mongoose.model('Player', playerSchema)
module.exports = Player