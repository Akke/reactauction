const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')  

const userModel = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    email: {type: String, required: true, unique: true},
}, {timestamps: true})

userModel.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    
    const saltRounds = 10;

    this.password = bcrypt.hash(this.password, saltRounds)

    next()
})


module.exports = mongoose.model('user', userModel)