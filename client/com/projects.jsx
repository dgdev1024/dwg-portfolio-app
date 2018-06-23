/**
 * @file client/com/projects.jsx
 * Presents the user's projects in this section.
 */

import React, { Component } from 'react'
import ProjectList from '../utility/projects'

export default class Projects extends Component {
  constructor (props) {
    super(props)

    this.state = { 
      category: 'full-stack-post-gdpr',
      page: 0,
      imageState: 'loading'
    }

    this.onButtonClicked = this.onButtonClicked.bind(this)
    this.onCategoryChanged = this.onCategoryChanged.bind(this)
    this.onImageLoaded = this.onImageLoaded.bind(this)
    this.onImageError = this.onImageError.bind(this)
  }

  onButtonClicked (ev) {
    const projects = ProjectList[this.state.category].projects
    const { page } = this.state

    if (ev.target.name === 'prev' && page > 0) {
      this.setState({ page: page - 1, imageState: 'loading' })
    } else if (ev.target.name === 'next' && page < projects.length - 1) {
      this.setState({ page: page + 1, imageState: 'loading' })
    }
  }

  onCategoryChanged (ev) {
    this.setState({ 
      category: ev.target.value,
      page: 0,
      imageState: 'loading'
    })
  }

  onImageLoaded (ev) {
    this.setState({
      imageState: 'ok'
    })
  }

  onImageError (ev) {
    this.setState({
      imageState: 'error'
    })
  }

  render() {
    const { description, projects } = ProjectList[this.state.category]
    const currentProject = projects.length > 0 ? projects[this.state.page] :
      null

    return (
      <section id="projects">
        <div className="container">

          <div className="top-pane">
            <h1>My Projects</h1>
            <div className="top-subpane" id="left">
              <label htmlFor="project-select">Project Category:</label>
              <select id="project-select" value={this.state.category} onChange={this.onCategoryChanged}>
                <option value="full-stack-post-gdpr">Full Stack</option>
                <option value="full-stack-pre-gdpr">Full Stack (Pre-GDPR)</option>
                <option value="backend">Backend Projects</option>
                <option value="frontend">Frontend Projects</option>
              </select>
            </div>
            <div className="top-subpane" id="right">
              {
                description ? 
                  <p>{description}</p> :
                  <p><em>Description Not Available</em></p>
              }
            </div>
          </div>

          <div className="project-pane">
            <button disabled={this.state.page === 0} name="prev" id="left" onClick={this.onButtonClicked}>&lt;</button>
            <button disabled={this.state.page === projects.length - 1} name="next" id="right" onClick={this.onButtonClicked}>&gt;</button>
            {
              currentProject.image &&
                <div id="image">
                  <img className={this.state.imageState !== 'ok' ? 'hidden' : ''}
                       src={currentProject.image} 
                       alt={currentProject.name} 
                       name={currentProject.name}
                       onLoad={this.onImageLoaded}
                       onError={this.onImageError} />
                  <p className={this.state.imageState === 'ok' ? 'hidden' : ''}>
                    {
                      this.state.imageState === 'loading' &&
                        <em>Loading image. Please wait...</em>
                    }
                    {
                      this.state.imageState === 'error' &&
                        <em>Error loading image. Try again later.</em>
                    }
                  </p>
                </div>
            }
            <div id="project">
              <h2>{this.state.page + 1}. {currentProject.name}</h2>
              <p>
                <strong>Description:</strong> <em>{currentProject.description}</em>
              </p>
              <p>
                <strong>Written Using:</strong> <em>{
                  currentProject.technologies.join(', ')
                }</em>
              </p>
              <div id="links">
                {
                  currentProject.pageUrl &&
                    <a href={currentProject.pageUrl} target="_blank">
                      <i className="fa fa-mail-forward" aria-hidden="true"></i> Visit Project
                    </a>
                }
                {
                  currentProject.githubUrl &&
                    <a href={currentProject.githubUrl} target="_blank">
                      <i className="fa fa-github" aria-hidden="true"></i> View on Github
                    </a>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
