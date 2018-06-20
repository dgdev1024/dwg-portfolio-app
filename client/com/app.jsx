/**
 * @file client/com/app.jsx
 * The application frontend's primary component.
 */

import React from 'react'
import Topbar from './topbar'
import Welcome from './welcome'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'

export default () => (
  <div>
    <Topbar />
    <Welcome />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)
