// Create web server

// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import the database module
const db = require('./db')

// Create the web server
const app = express()

// Enable cross-origin resource sharing
app.use(cors())

// Enable JSON body parsing of application/json
app.use(bodyParser.json())

// Get all comments
app.get('/comments', (req, res) => {
  db.getComments()
    .then(comments => res.json(comments))
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  db.getComment(req.params.id)
    .then(comment => {
      if (comment) {
        res.json(comment)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

// Add a comment
app.post('/comments', (req, res) => {
  db.addComment(req.body)
    .then(id => res.json(id))
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

// Update a comment
app.put('/comments/:id', (req, res) => {
  db.updateComment(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  db.deleteComment(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

// Start the server
app.listen(3000)