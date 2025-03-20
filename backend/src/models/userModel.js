const mongoose = require('mongoose')

const userModel = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    mail: {type: String, required: true, unique: true},
}, {timestamps: true})


module.exports = mongoose.model('user', userModel)