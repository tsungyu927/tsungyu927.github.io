import React from 'react'
import './home.scss'
import './home_mobile.scss'
// scroll
import Scroll from 'react-scroll'
// svg
import { ReactComponent as Portrait } from '../../assets/home/Portrait_3px.svg'
// components
import { Button, BigText } from '../../components'

function Home() {
  const handleClick = () => {
    // scroll to About page
    const scroll = Scroll.animateScroll
    scroll.scrollTo(window.innerHeight, {
      smooth: true,
      duration: 600,
      spy: true,
    })
  }

  return (
    <div className="home">
      <BigText fileN="Home" isBright />
      <div className="col-1">
        <div className="content">
          <div className="title">Frontend Developer</div>
          <div className="subtitle">
            Create and make it possible
            <br />
            Codding is my passion
          </div>
        </div>
      </div>
      <div className="col-2">
        <Portrait className="portrait" />
      </div>
      <div className="col-3">
        <div className="brief-content">
          <div className="brief-intro">
            Hello,
            <br />
            I&#39;m Jamie, a 25 years old
            <b>Frontend Developer</b>
            interesting in create website and explore technology. I like to use technology to solve
            problems in life.
          </div>
          <div className="more-btn">
            <Button text="MORE ABOUT ME" color="#040404" handleClick={() => handleClick()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
