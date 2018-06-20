/**
 * @file client/com/topbar.jsx
 * Presents the top bar at the top of the web page.
 */

import React, { Component } from 'react'
import Links from '../utility/links'
import DwgLogo from '../img/dwg-logo.png'

export default class Topbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mobileMenuShown: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.resetMobileMenu = this.resetMobileMenu.bind(this)
  }

  toggleMobileMenu () {
    this.setState({
      mobileMenuShown: !this.state.mobileMenuShown
    })
  }

  resetMobileMenu () {
    this.setState({
      mobileMenuShown: false
    })
  }

  render() {
    return (
      <div className="topbar-wrapper" onMouseLeave={this.resetMobileMenu}>
        <header>
          <a href="#home" className="hoverable" id="logo">
            <img src={DwgLogo} 
                alt="Dennis Griffin's Web Development"
                title="Dennis Griffin's Web Development" />
          </a>
          <div className="hoverable" id="nav-toggle" onClick={this.toggleMobileMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <nav className={this.state.mobileMenuShown ? 'shown' : ''}>
            <a href="#home" onClick={this.resetMobileMenu} className="hoverable">Home</a>
            <a href="#about" onClick={this.resetMobileMenu} className="hoverable">About Me</a>
            <a href="#projects" onClick={this.resetMobileMenu} className="hoverable">My Projects</a>
            <a href="#contact" onClick={this.resetMobileMenu} className="hoverable">Contact Me</a>
          </nav>
          <div className={this.state.mobileMenuShown ? 'social shown' : 'social'}>
            <a href={Links.facebook} target="_blank" onClick={this.resetMobileMenu} className="hoverable social" id="facebook" title="Facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href={Links.twitter} target="_blank" onClick={this.resetMobileMenu} className="hoverable social" id="twitter" title="Twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href={Links.youtube} target="_blank" onClick={this.resetMobileMenu} className="hoverable social" id="youtube" title="YouTube">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href={Links.github} target="_blank" onClick={this.resetMobileMenu} className="hoverable social" id="github" title="Github">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href={Links.email} target="_blank" onClick={this.resetMobileMenu} className="hoverable social" id="email" title="dgdev1024@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href={Links.resume} target="_blank" onClick={this.resetMobileMenu} className="hoverable social" id="resume" title="My Resume">
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
            </a>
          </div>
        </header>
      </div>
    )
  }
}
