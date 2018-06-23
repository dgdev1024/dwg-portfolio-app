/**
 * @file client/com/welcome.jsx
 * Presents the welcome section to the user.
 */

import React from 'react'
import DwgLogo from '../img/dwg-logo.png'
import Links from '../utility/links'

export default () => (
  <section id="welcome">
    <div className="container">
      <div className="pane">
        <img src={DwgLogo} alt="Dennis Griffin's Web Development"/>
      </div>
      <div className="pane middle">
        <h1>Dennis W. Griffin</h1>
        <h2>Web Developer</h2>
        <a href={Links.resume} target="_blank">Resume</a>
        <a href="#about">Learn More</a>
      </div>
    </div>
  </section>
)
