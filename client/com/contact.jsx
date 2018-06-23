/**
 * @file client/com/contact.jsx
 * Presents a contact form to the user.
 */

import React, { Component } from 'react'
import Links from '../utility/links'
import axios from 'axios'

export default class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fullName: '',
      emailAddress: '',
      subject: '',
      body: '',
      explicitConsent: false,
      result: '',
      details: [],
      sending: false
    }

    this.onTextInput = this.onTextInput.bind(this)
    this.onConsentTick = this.onConsentTick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onTextInput (ev) {
    let change = {}
    change[ev.target.name] = ev.target.value
    this.setState(change)
  }

  onConsentTick (ev) {
    this.setState({ explicitConsent: ev.target.checked })
  }

  onSubmit (ev) {
    ev.preventDefault()

    this.setState({ result: '' })

    if (!this.state.explicitConsent) {
      this.setState({
        result: 'You must provide explicit consent before sending.'
      })
      return
    }

    const message = {
      fullName: this.state.fullName,
      emailAddress: this.state.emailAddress,
      subject: this.state.subject,
      body: this.state.body,
      consent: this.state.explicitConsent
    }

    this.setState({ sending: true })

    axios.post('/api/contact', message)
      .then((response) => {
        const { message } = response.data
        this.setState({ 
          result: message,
          details: [],
          fullName: '',
          emailAddress: '',
          subject: '',
          body: '',
          explicitConsent: false,
          sending: false
        })
      })
      .catch((error) => {
        if (error.response) {
          const { message, details } = error.response.data
          this.setState({ result: message, details, sending: false })
        } else {
          this.setState({ result: `Axios error: ${error.message}`, sending: false })
        }
      })
  }

  render() {
    return (
      <section id="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <div className="pane one">
            <p> 
              If you need a website, have a website and want it remade, have any
              web-development-related questions, or just want to shoot a breeze
              with me, you can send me a message using the contact form right here
              on the page.
            </p>
            <p>
              If you send a message in this way, the full name and email address that
              you provide <em>with your explicit consent</em> will be included in the
              sent message. This information will not be stored.
            </p>
            <p>
              You can also reach me the following ways:
            </p>
            <ul>
              <li>
                <a href={Links.twitter} target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
                </a>
              </li>
              <li>
                <a href={Links.facebook} target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li>
                <a href={Links.youtube} target="_blank">
                  <i className="fa fa-youtube" aria-hidden="true"></i> YouTube
                </a>
              </li>
              <li>
                <a href={Links.github} target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i> Github
                </a>
              </li>
              <li>
                <a href={Links.codepen} target="_blank">
                  <i className="fa fa-codepen" aria-hidden="true"></i> Codepen
                </a>
              </li>
              <li>
                <a href={Links.freecodecamp} target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true"></i> Free Code Camp
                </a>
              </li>
              <li>
                <a href={Links.email} target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true"></i> Email: dgdev1024@gmail.com
                </a>
              </li>
            </ul>
            {
              this.state.result &&
                <p>{this.state.result}</p>
            }
            {
              this.state.details.length > 0 &&
              <ul>
                {this.state.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
          </div>
          <div className="pane two">
            <form onSubmit={this.onSubmit}>
              <div className="form-element">
                <label htmlFor="full-name">Full Name: </label>
                <input id="full-name" name="fullName" type="text"
                  value={this.state.fullName} onChange={this.onTextInput}
                  required />
              </div>
              <div className="form-element">
                <label htmlFor="email-address">Email Address: </label>
                <input id="email-address" name="emailAddress" type="text"
                  value={this.state.emailAddress} onChange={this.onTextInput}
                  required />
              </div>
              <div className="form-element">
                <label htmlFor="subject">Subject: </label>
                <input id="subject" name="subject" type="text"
                  value={this.state.subject} onChange={this.onTextInput}
                  required />
              </div>
              <div className="form-element">
                <label htmlFor="body">Body: </label>
                <textarea id="body" name="body"
                  value={this.state.body} onChange={this.onTextInput}
                  required />
              </div>
              <div className="form-element">
                <input id="explicit-consent" type="checkbox"
                  checked={this.state.explicitConsent} onChange={this.onConsentTick} 
                  required />
                <label className="inline" htmlFor="explicit-consent">
                  I consent to my full name and email address being included
                  in the message that will be sent when I click "Send Message".
                </label>
              </div>
              <div className="form-element">
                <button type="submit" disabled={!this.state.explicitConsent || this.state.sending}>
                  {
                    this.state.explicitConsent ?
                      'Send Message' :
                      'Please Provide Consent'
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
