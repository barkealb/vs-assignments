const express = require('express')
const authRouter = express.Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')

//Sign Up 

authRouter.post('/signup', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()})
        .then(user => {
            if (user) {
                // A user with this username already exists
                res.status(403);
                return next(new Error("Username already taken"));
            } else {
                // No user exists with this username, create a new user
                const newUser = new User(req.body);
                newUser.save()
                    .then(savedUser => {
                        // Create a JSON web token for the new user
                        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
                        return res.status(201).send({token, user: savedUser.withoutPassword()});
                    })
                    .catch(err => {
                        res.status(500);
                        return next(err);
                    });
            }
        })
        .catch(err => {
            // Handle any errors that occurred during the database query
            res.status(500);
            return next(err);
        });
});

//Login 

authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()})
    .then(user => {
        if(!user){
        //When there is no existing username 
            res.status(403)
            return next( new Error("Username or Password is incorrect"))
        }
        //When there is a user 
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
        return res.status(201).send({token, user: user.withoutPassword()})
    })
    .catch(err => {
         // Handle any errors that occurred during the database query
        res.status(500);
        return next(err)
    })
})



module.exports = authRouter