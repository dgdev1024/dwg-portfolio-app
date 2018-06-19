/**
 * @file server/index.js
 * 
 * The entry point for our app's backend.
 */

// Imports
const path = require('path')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const httpStatusCodes = require('http-status-codes')
const email = require('./email')

// Relative Path to Client Dist Folder
const pathToDist = path.join(__dirname, '..', 'dist')

// Export
module.exports = () => {
  // Express and Middleware
  const app = express()
  app.use(cors())
  app.use(helmet())
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.static(pathToDist))

  // Contact route
  app.post('/api/contact', email.sendMail)

  // Catch-all route to serve index page
  app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(pathToDist, 'index.html'))
  })

  // Catch errors
  app.use((err, req, res, next) => {
    let error = {}

    error.status = err.status
    error.type = httpStatusCodes.getStatusText(err.status)

    if (process.env.NODE_ENV === 'development') {
      error.message = err.message
      error.stack = err.stack
    }

    return res.status(err.status).json({ error })
  })

  // Listen on given port
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Listening for requests on port #${port}...`)
  })
}