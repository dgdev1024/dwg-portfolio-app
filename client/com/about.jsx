/**
 * @file client/com/about.jsx
 * Presents the About section to the user.
 */

import React from 'react'
import DwgDennis from '../img/dwg-dennis.png'

export default () => (
  <section id="about">
    <div className="container">
      <div className="pane" id="image">
        <img src={DwgDennis} alt="Dennis Griffin" title="Dennis Griffin" />
      </div>
      <div className="pane" id="bio">
        <h1>About Me</h1>
        <p>
          My name is Dennis Griffin. I am a web developer with experience and
          competence with various different frontend and backend web development
          technologies, and a deep background in native software development, which
          has ultimately led me to my current, primary specialization.
        </p>
        <h2>My Skills</h2>
        <ul>
          <li>HTML5 and CSS3</li>
          <li>Javascript (ES5, ES6+)</li>
          <li>JQuery</li>
          <li>Typescript</li>
          <li>React JS</li>
          <li>Angular 4+</li>
          <li>Vue.JS - <em>Learning...</em></li>
          <li>Jade / Pug</li>
          <li>Bootstrap</li>
          <li>Node.JS</li>
          <li>Express</li>
          <li>MongoDB - <em>via Mongoose JS</em></li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
  </section>
)