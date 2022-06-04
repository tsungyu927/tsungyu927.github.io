import React from 'react'
import PropTypes from 'prop-types'
import './mobileMenu.scss'
import { Link } from 'react-scroll'
// icons
import { IoMdClose } from 'react-icons/io'
import { AiOutlineMedium } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { VscMail, VscPreview } from 'react-icons/vsc'
// HintBtn
import HintBtn from '../hintBtn/HintBtn'

function MobileMenu(props) {
  const { handleClick } = props
  return (
    <div className="mMenu">
      <div className="top">
        <Link activeClass="active" to="home" spy smooth duration={600} className="menu" onClick={() => handleClick()}>
          Home
        </Link>
        <Link activeClass="active" to="about" spy smooth duration={600} className="menu" onClick={() => handleClick()}>
          About
        </Link>
        <Link activeClass="active" to="experience" spy smooth duration={600} className="menu" onClick={() => handleClick()}>
          Experience
        </Link>
        <Link activeClass="active" to="skills" spy smooth duration={600} className="menu" onClick={() => handleClick()}>
          Skills
        </Link>
        <Link activeClass="active" to="work" spy smooth duration={600} className="menu" onClick={() => handleClick()}>
          Work
        </Link>
      </div>
      <div className="bottom">
        <HintBtn loc="nav" type="E-Mail">
          <VscMail />
        </HintBtn>
        <HintBtn loc="nav" type="Github">
          <FiGithub />
        </HintBtn>
        <HintBtn loc="nav" type="Medium">
          <AiOutlineMedium />
        </HintBtn>
        <HintBtn loc="nav" type="Resume">
          <VscPreview />
        </HintBtn>
      </div>
      <button type="button" className="menu-btn" onClick={() => handleClick()}>
        <IoMdClose className="icon" />
      </button>

    </div>
  )
}

MobileMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default MobileMenu
