/**
 * @file client/index.js
 * 
 * The entry point for our app's frontend.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './com/app'
import './img/favicon.ico'
import './scss/main.scss'

ReactDOM.render(<App />, document.getElementById('app'))