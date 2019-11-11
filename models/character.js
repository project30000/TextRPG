const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');


// Define userSchema
const characterSchema = new Schema({
    name: { type: String,required: true },
    str: { type: Boolean,required: true },
    dex:{ type: Boolean,required: true },
    int: { type: Boolean,required: true },
    char: { type: Boolean,required: true},
   
    // //initalize to zero on every create
    alive: { type: Boolean, unique: false, required: true, default: true},
    user: { type: String, unique: true, required: true },
    killcount: { type: Number, unique: false, required: false, default: 0},
    defeatedcount: { type: Number, unique: false, required: false, default: 0},
    

})

const Character = mongoose.model('Character', characterSchema)
module.exports = Character