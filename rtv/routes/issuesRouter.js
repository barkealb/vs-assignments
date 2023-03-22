const express = require('express')
const issuesRouter = express.Router()
const Issues = require('../model/Issue')

//Get All Issues 

issuesRouter.get('/', (req, res, next) => {
    Issues.find()
    .then(issues => {
        return res.status(200).send(issues)
    })
    .catch(err => console.log(err))
})

//Get issues by user 

issuesRouter.get('/user', (req, res, next) => {
    Issues.find({user: req.auth._id})
    .then(user => {
        res.status(200).send(user)
    })
    .catch(err => console.log(err))
})

//Post Issues by User

issuesRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issues(req.body);
    newIssue.save()
    .then(savedIssue => {
        return res.status(201).send(savedIssue)
    })
    .catch(err => console.log(err))
})

//Delete Issues 

issuesRouter.delete("/:issueId", (req, res, next) =>{
    Issues.findByIdAndDelete({_id: req.params.issueId, user: req.auth._id})
    .then(deletedIssue => {
        res.status(200).send(`Successfully deleted Issue: ${deletedIssue.title}`)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

// Edit Issues 

issuesRouter.put("/:issueId", (req, res, next) => {
    Issues.findByIdAndUpdate({_id: req.params.issueId, user: req.auth._id}, req.body, { new: true })
    .then(updatedIssues => {
        res.status(201).send(updatedIssues)
    })
    .catch(err => console.log(err))
    
})










module.exports = issuesRouter