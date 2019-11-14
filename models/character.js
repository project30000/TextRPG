const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Define userSchema
const characterSchema = new Schema({
    name: { type: String, required:true},
    // str: { type: Boolean,required: true},
    // dex:{ type: Boolean,required: true },
    // int: { type: Boolean,required: true },
    // char: { type: Boolean,required: true},
    user_id: [{type: Schema.Types.ObjectId, ref: "User"}],
    killCount: {type: Number, default: 0}


   
   
    // //initalize to zero on every create
    // alive: { type: Boolean, unique: false, required: true, default: true},
    // user: { type: String, unique: true, required: true },
    

})

const Character = mongoose.model('Character', characterSchema)
module.exports = Character