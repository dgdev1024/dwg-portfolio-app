/**
 * @file server/email.js
 * 
 * Controller function for sending email.
 */

// Imports
const nodemailer = require('nodemailer')
const htmlEscape = require('html-escape')

// Email Transport
const transport = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  secure: true,
  port: 465,
  auth: {
      user: process.env.EMAIL_ADDRESS,
      type: 'oauth2',
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
      refreshToken: process.env.EMAIL_REFRESH_TOKEN,
      accessToken: process.env.EMAIL_ACCESS_TOKEN
  }
})

// A sender string.
const senderString = `Dennis Griffin's Portfolio <${process.env.EMAIL_ADDRESS}>`

// A dictionary of regular expressions to be used while validating.
const regex = {
  symbols: /[$-/:-?{-~!"^_`\[\]!@]/,
  capitals: /[A-Z]/,
  numbers: /[0-9]/,
  emails: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

/**
 * @function validateInput
 * 
 * Validates the inputs fed into the controller function.
 * 
 * @param {object} body The HTTP request body.
 * 
 * @return {string[]} An array of errors, if any are found.
 */
const validateInput = (body) => {
  let errors = []

  // Were all fields provided?
  if (!body.fullName) { errors.push('Please enter your full name.') }
  if (!body.emailAddress) { errors.push('Please enter your email address.') }
  if (!body.subject) { errors.push('Please enter a subject.') }
  if (!body.body) { errors.push('Please enter some body text.') }
  if (!body.consent) { errors.push('Please provide consent for us to use your data.') }

  // Are all fields of the correct type?
  if (body.fullName && typeof body.fullName !== 'string') {
    errors.push('Your full name must be a string.')
  }
  if (body.emailAddress && typeof body.emailAddress !== 'string') {
    errors.push('Your email address must be a string.')
  }
  if (body.subject && typeof body.subject !== 'string') {
    errors.push('Your subject must be a string.')
  }
  if (body.body && typeof body.body !== 'string') {
    errors.push('Your contact message body must be a string.')
  }
  if (body.consent && typeof body.consent !== 'boolean') {
    errors.push('Your consent must be a boolean.')
  }

  // Do any fields contain illegal characters, like symbols or numbers?
  if (body.fullName && (regex.symbols.test(body.fullName) || regex.numbers.test(body.fullName))) {
    errors.push('Your full name can only contain letters.')
  }
  if (body.emailAddress && !regex.emails.test(body.emailAddress)) {
    errors.push('The email address provided is invalid.')
  }
  if (body.consent === false) {
    errors.push('Please provide consent for us to use your data.')
  }
  
  return errors
}

/**
 * @function sendMail
 * 
 * The controller function for sending the contact email.
 * 
 * @param {Request} req The HTTP request.
 * @param {Response} res The HTTP response.
 */
module.exports.sendMail = (req, res) => {
  // Check for validation errors.
  const validationErrors = validateInput(req.body)
  if (validationErrors.length > 0) {
    return res.status(400).json({
      message: 'There were errors validating your inputs.',
      details: validationErrors
    })
  }

  // Create the recipient string.
  const recipentString = `${process.env.EMAIL_RECIPIENT_NAME} <${process.env.EMAIL_RECIPIENT_ADDRESS}>`

  // Create the email body.
  const body = `
    <div style="background-color: #DDDDDD; color: #111111">
      <h1 style="background-color: #003877; color: #FFFFFF; margin: 0px; padding: 12px;">
        Dennis Griffin's Portfolio
      </h1>
      <div style="padding: 16px">
        <h2>
          You have a new message!
        </h2>
        <p>
          Name: ${req.body.fullName}<br />
          Email: ${req.body.emailAddress}<br />
          Subject: ${htmlEscape(req.body.subject)}<br />
        </p>
        <p>
          ${htmlEscape(req.body.body)}
        </p>
      </div>
    </div>
  `

  // Send the email.
  transport.sendMail({
    from: senderString,
    to: recipentString,
    subject: `New Contact Message: ${htmlEscape(req.body.subject)}`,
    html: body
  }).then(() => {
    return res.status(200).json({
      message: 'Your message has been sent.'
    })
  }).catch((err) => {
    console.error(err);
    return res.status(500).json({
      message: 'An error occured. Please try again later.'
    })
  })
}