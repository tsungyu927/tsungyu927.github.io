import React, {
  useState, useEffect, useCallback,
} from 'react'
import './navbar.scss'
import './navbar_mobile.scss'
import { Link } from 'react-scroll'
// icons
import { AiOutlineMedium, AiOutlineMenu } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { VscMail, VscPreview } from 'react-icons/vsc'
// HintBtn
import HintBtn from '../hintBtn/HintBtn'
import MobileMenu from './MobileMenu'
// img
import Logo from '../../assets/Jamie.png'
import { ReactComponent as EnIcon } from '../../assets/icons/en.svg'

function Navbar() {
  const [y, setY] = useState(window.scrollY)
  const [scrollUp, setScrollUp] = useState('') // scroll up -> show menu
  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen((prev) => !prev)
  }

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget
    const dis = y - window.scrollY
    if (dis > 2 || !window.pageYOffset) {
      // 往上滑動一小段距離 || 畫面的y是0
      // console.log('scrolling up')
      setScrollUp('show')
    } else if (dis < -2 && window.pageYOffset) {
      // 往下滑動一小段距離 && 畫面的y不是0
      // console.log('scrolling down')
      setScrollUp('hide')
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <div className={`navbar ${scrollUp}`}>
      {open ? (<MobileMenu handleClick={() => openMenu()} />) : ''}
      <div className="row">
        <div className="col-1">
          {/* logo */}
          <Link activeClass="active" to="home" spy smooth duration={600} className="name">
            <img src={Logo} className="logo" alt="logo" />
          </Link>
        </div>

        <div className="col-2">
          {/* menu */}
          <div className="menu-list">
            <Link activeClass="active" to="home" spy smooth duration={600} className="menu">
              Home
            </Link>
            <Link activeClass="active" to="about" spy smooth duration={600} className="menu">
              About
            </Link>
            <Link activeClass="active" to="experience" spy smooth duration={600} className="menu">
              Experience
            </Link>
            <Link activeClass="active" to="skills" spy smooth duration={600} className="menu">
              Skills
            </Link>
            <Link activeClass="active" to="work" spy smooth duration={600} className="menu">
              Work
            </Link>
          </div>
        </div>

        <div className="col-3">
          {/* link */}
          <div className="link-list">
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
          {/* Eng -> Ch */}
          <div className="trans-list">
            <HintBtn loc="nav" type="In Development">
              <EnIcon />
            </HintBtn>
          </div>
        </div>

        <button type="button" className="menu-btn" onClick={() => openMenu()}>
          {open ? '' : (
            <AiOutlineMenu className="icon" />
          )}
        </button>

      </div>
    </div>
  )
}

export default Navbar
