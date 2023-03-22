const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Set Up encryption hook 

userSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified('password')) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

//Method to Check encrypted Password 

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatched) => {
        if(err) return callback(err)
        return callback(null, isMatched)
    })
}

// Save without Password 

userSchema.methods.withoutPassword = function(){
    const user = this.toObject();
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)