/**
 * @file index.js
 * 
 * The entry point for the application.
 */

// Imports
const fs = require('fs')
const nodeEnvFile = require('node-env-file')

// Load environment variables from the local '.env' file
// in development mode.
if (process.env.NODE_ENV === 'development') {
  if (fs.existsSync('.env') === true) {
    nodeEnvFile('.env')
  } else {
    console.warn('Development mode: .env file is missing.')
  }
}

// Throw an exception if Node raises an unhandled promise warning.
process.on('unhandledRejection', (err) => {
  throw err
})

// Run the server code.
require('./server')()