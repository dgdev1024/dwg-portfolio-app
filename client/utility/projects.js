/**
 * @file client/utility/projects.js
 * An array of our showcased projects.
 */

import RUMCFrontpage from '../img/rumc-frontpage.png'
import ShtocksFrontpage from '../img/shtocks-frontpage.png'
import VotanyFrontpage from '../img/votany-frontpage.png'
import TdmdFrontpage from '../img/tdmd-frontpage.png'
import DuinFrontpage from '../img/duin-frontpage.png'

export default {
  'full-stack-post-gdpr': {
    description: `
      These websites are developed and designed in compliance with the European Union's
      General Data Protection Regulation (GDPR), with data security and transparency by
      default as a forethought, so you know your data will be 100% safe with us.
    `,
    projects: [
      {
        name: 'Riverside United Methodist Church',
        description: 'The website for the Riverside United Methodist Church in Riverside, MI',
        image: RUMCFrontpage,
        pageUrl: 'https://riversidemiumc.com',
        githubUrl: null,
        technologies: [
          'Javascript ES6',
          'React JS',
          'Node.JS',
          'Express',
          'Nodemailer'
        ]
      },
      {
        name: 'Shtocks',
        description: 'A public stock viewing web application. Stocks powered by Alpha Vantage.',
        image: ShtocksFrontpage,
        pageUrl: 'https://shtocks.herokuapp.com',
        githubUrl: 'https://github.com/dgdev1024/Stock_Viewer',
        technologies: [
          'Typescript',
          'Javascript ES6',
          'Angular 4',
          'Node.JS',
          'Express',
          'Mongoose'
        ]
      }
    ]
  },

  'full-stack-pre-gdpr': {
    description: `
      These websites were developed before my awareness of the EU's GDPR rules, and are
      therefore temporarly unavailable, pending rewrites for compilance. Meanwhile, you can
      still browse their code on Github.
    `,
    projects: [
      {
        name: 'Duin Duin Duin',
        description: 'A website for finding nearby nightlife venues and coordinating a good night out.',
        image: DuinFrontpage,
        pageUrl: null,
        githubUrl: 'https://github.com/dgdev1024/Duin_Nightlife_Coordination_App',
        technologies: [
          'Typescript',
          'Javascript ES6',
          'Angular 4',
          'Node.JS',
          'Express',
          'Mongoose',
          'Nodemailer',
          'Passport',
          'Yelp Fusion'
        ]
      },
      {
        name: 'Votany',
        description: 'A website for creating, managing, and voting on polls.',
        image: VotanyFrontpage,
        pageUrl: null,
        githubUrl: 'https://github.com/dgdev1024/Votany_Angular',
        technologies: [
          'Typescript',
          'Javascript ES6',
          'Angular 4',
          'Node.JS',
          'Express',
          'Mongoose',
          'Nodemailer',
          'Passport'
        ]
      },
      {
        name: 'The Daily Markdown',
        description: 'A basic blogging website featuring articles written using Markdown syntax.',
        image: TdmdFrontpage,
        pageUrl: null,
        githubUrl: 'https://github/dgdev1024/Markdown_Blog',
        technologies: [
          'Typescript',
          'Javascript ES6',
          'Angular 4',
          'Node.JS',
          'Express',
          'Mongoose',
          'Nodemailer',
          'Passport'
        ]
      }
    ]
  },

  'backend': {
    description: `
      These web API projects can be used with anything from your browser, to your command-line
      REST API client.
    `,
    projects: [
      {
        name: 'Timestamp Microservice',
        description: 'Generates a natural date and a UNIX timestamp from a given date string.',
        technologies: [ 'Javascript ES6', 'Node.js', 'Express' ],
        pageUrl: 'https://dwg-timestamp.glitch.me/',
        githubUrl: 'https://github.com/dgdev1024/Timestamp_Microservice',
        image: null
      },
      {
        name: 'Request Header Parser Microservice',
        description: 'Parses an HTTP request header to determine the client\'s language, operating system, and IP address.',
        technologies: [ 'Javascript ES6', 'Node.js', 'Express' ],
        pageUrl: 'https://identify-me.glitch.me/',
        githubUrl: 'https://github.com/dgdev1024/Header_Parser',
        image: null
      },
      {
        name: 'URL Shortener Microservice',
        description: 'Generates a short URL that points to the destination of your choice.',
        technologies: [ 'Javascript ES6', 'Node.js', 'MongoDB', 'Mongoose', 'Express' ],
        pageUrl: 'https://smurl.glitch.me/',
        githubUrl: 'https://github.com/dgdev1024/URL_Shortener',
        image: null
      },
      {
        name: 'File Metadata Microservice',
        description: 'Displays the metadata details of an uploaded file, including MIME type and file size.',
        technologies: [ 'Javascript ES6', 'React JS', 'SASS', 'Node.js', 'Express', 'Multer' ],
        pageUrl: 'https://metafile.glitch.me/',
        githubUrl: 'https://github.com/dgdev1024/File_Metadata_Analyzer',
        image: null
      }
    ]
  },

  'frontend': {
    description: `
      These projects, powered by Codepen.io, showcase my prowess with HTML5, CSS3, SASS, and client-side
      Javascript.
    `,
    projects: [
      {
        name: 'Random Quote Generator',
        description: 'This site allows you to roll a random, inspiring quote on demand. The quotes are brought to you by Forismatic.',
        technologies: [ 'Bootstrap', 'Javascript', 'JQuery' ],
        image: 'https://codepen.io/dgdev1024/pen/NdeGJr/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/NdeGJr',
        githubUrl: null
      },
      {
        name: 'Wikipedia Search Viewer',
        description: 'This site allows you to search for Wikipedia articles. Wikipedia\'s API will fetch the articles for you.',
        technologies: [ 'Javascript', 'JQuery' ],
        image: 'https://codepen.io/dgdev1024/pen/pRBGKa/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/pRBGKa',
        githubUrl: null
      },
      {
        name: 'Twitch Streamer Status Viewer',
        description: 'This site uses Twitch\'s API to show the online status of Twitch\'s currently featured streamers, as well as a select few others.',
        technologies: [ 'Bootstrap', 'Javascript', 'JQuery' ],
        image: 'https://codepen.io/dgdev1024/pen/YNbNZG/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/YNbNZG',
        githubUrl: null
      },
      {
        name: 'Basic Calculator',
        description: 'This is a basic calculator. It features basic math functions (add, subtract, etc.), left-to-right calculation, and a rudimentary memory feature.',
        technologies: [ 'Javascript', 'JQuery' ],
        image: 'https://codepen.io/dgdev1024/pen/MpYmJd/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/MpYmJd',
        githubUrl: null
      },
      {
        name: 'Pomodoro Clock',
        description: 'Here\'s a tool that can help you pace your work time and your break time. Set up the work and break timers, and they will alternate between each other when their time lapses.',
        technologies: [ 'Javascript', 'JQuery' ],
        image: 'https://codepen.io/dgdev1024/pen/oZXLay/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/oZXLay',
        githubUrl: null
      },
      {
        name: 'Tic Tac Toe',
        description: 'This is a basic implementation of the game of Tic Tac Toe, which utilizes RNG-driven AI.',
        technologies: [ 'Javascript', 'JQuery' ],
        image: 'https://codepen.io/dgdev1024/pen/EWPXQP/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/EWPXQP',
        githubUrl: null
      },
      {
        name: 'Simon',
        description: 'This is a clone of the classic electronic memory game, Simon. For this project I decided to use regular DOM manipulation, instead of JQuery.',
        technologies: [ 'Javascript' ],
        image: 'https://codepen.io/dgdev1024/pen/aJdjEd/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/aJdjEd',
        githubUrl: null
      },
      {
        name: 'Todo List',
        description: 'This is a simple, volatile todo list. Here, you can add, remove, and manage tasks. This is my first effort with ES6, React, and SASS.',
        technologies: [ 'Javascript ES6', 'React JS', 'SASS' ],
        image: 'https://codepen.io/dgdev1024/pen/OppVoB/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/OppVoB',
        githubUrl: null
      },
      {
        name: 'Markdown Previewer',
        description: 'Here is an editor that allows you to write and preview Markdown code. Write your code in the left pane, and preview it in the right.',
        technologies: [ 'Javascript ES6', 'React JS', 'SASS', 'Marked' ],
        image: 'https://codepen.io/dgdev1024/pen/JWWWYw/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/JWWWYw',
        githubUrl: null
      },
      {
        name: 'Camper Leaderboard',
        description: 'This is a leaderboard of the most active users on freeCodeCamp, an interactive web platform for learning code.',
        technologies: [ 'Javascript ES6', 'React JS', 'SASS', 'Axios' ],
        image: 'https://codepen.io/dgdev1024/pen/ZeJJYW/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/ZeJJYW',
        githubUrl: null
      },
      {
        name: 'Recipe Box',
        description: 'This app allows yuo to keep, view, manage, manipulate, and save recipes that you come up with. This app takes advantage of the browser\'s localStorage object in order to save the recipes.',
        technologies: [ 'Javascript ES6', 'React JS', 'SASS' ],
        image: 'https://codepen.io/dgdev1024/pen/YZYxMe/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/YZYxMe',
        githubUrl: null
      },
      {
        name: 'Game of Life',
        description: 'An implementation of John Conway\'s Game of Life algorithm. Set up the board, or generate a random board, and hit the Play button to see what happens!',
        technologies: [ 'Javascript ES6', 'React JS' ],
        image: 'https://codepen.io/dgdev1024/pen/LWrYwg/image/large.png',
        pageUrl: 'https://codepen.io/dgdev1024/full/LWrYwg',
        githubUrl: null
      }
    ]
  }
}