import React from 'react'
import PropTypes from 'prop-types'

export default function Icon({ type, ...props }) {
  /* eslint-disable */
  let TheIcon
  switch(type){
    // language
    case 'HTML5':
      TheIcon = require('react-icons/ai/').AiOutlineHtml5
      break
    case 'CSS3':
      TheIcon = require('react-icons/ri').RiCss3Line
      break
    case 'Javascript':
      TheIcon = require('react-icons/di').DiJavascript1
      break
    case 'jQuery':
      TheIcon = require('react-icons/di').DiJqueryLogo
      break
    case 'React':
      TheIcon = require('react-icons/di').DiReact
      break
    case 'Redux':
      TheIcon = require('react-icons/si').SiRedux
      break
    case 'Node.js':
      TheIcon = require('react-icons/si').SiNodedotjs
      break
    // others
    case 'Git':
      TheIcon = require('react-icons/ri').RiGitMergeLine
      break
    case 'GCP':
      TheIcon = require('react-icons/di').DiGoogleCloudPlatform
      break
    case 'Firebase':
      TheIcon = require('react-icons/si').SiFirebase
      break
    case 'Heroku':
      TheIcon = require('react-icons/si').SiHeroku
      break
    case 'LineAPI':
      TheIcon = require('react-icons/ri').RiLineLine
      break
    case 'Npm/Yarn':
      TheIcon = require('react-icons/di').DiNpm
      break
    case 'RWD':
      TheIcon = require('react-icons/md').MdOutlinePhonelink
      break

  }
  

  return <TheIcon {...props} />
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}
