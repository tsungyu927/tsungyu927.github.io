import React from 'react'
import './hintBtn.scss'
import PropTypes from 'prop-types'
// link
import * as LinkFunc from './LinkFunc'

function HintBtn(props) {
  const { loc, type, children } = props

  const handleClick = () => {
    switch (type) {
      case 'E-Mail':
        LinkFunc.openMail()
        break
      case 'Github':
        LinkFunc.openGithub()
        break
      case 'Medium':
        LinkFunc.openMedium()
        break
      case 'Resume':
        LinkFunc.openResume()
        break
      default:
        break
    }
  }

  return (
    <button type="button" hint-data={type} className={`outerlink ${loc}-icon`} onClick={() => handleClick()}>
      {children}
    </button>
  )
}

HintBtn.propTypes = {
  loc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default HintBtn
