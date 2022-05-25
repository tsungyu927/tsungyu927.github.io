import React, {
  useState, useEffect, useCallback,
} from 'react'
import './navbar.scss'
import { Link } from 'react-scroll'
// icons
import { AiOutlineMedium } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { VscMail, VscPreview } from 'react-icons/vsc'
// img
import Logo from '../../assets/Jamie.png'
import { ReactComponent as EnIcon } from '../../assets/icons/en.svg'

function Navbar() {
  const [y, setY] = useState(window.scrollY)
  const [scrollUp, setScrollUp] = useState('') // scroll up -> show menu

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
      <div className="row">
        <div className="col-1">
          {/* logo */}
          <button type="button" className="name">
            <img src={Logo} className="logo" alt="logo" />
          </button>
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
            <button type="button" className="link">
              <VscMail />
            </button>
            <button type="button" className="link">
              <FiGithub />
            </button>
            <button type="button" className="link">
              <AiOutlineMedium />
            </button>
            <button type="button" className="link">
              <VscPreview />
            </button>
          </div>
          {/* Eng -> Ch */}
          <div className="trans-list">
            <button type="button" className="translateBtn">
              <EnIcon />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
