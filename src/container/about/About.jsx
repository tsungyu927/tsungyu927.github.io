import React from 'react'
import './about.scss'
import './about_mobile.scss'
// scroll
import Scroll from 'react-scroll'
// animate
import ScrollAnimation from 'react-animate-on-scroll'
// components
import { BigText, Button } from '../../components'

function About() {
  const scroll = Scroll.animateScroll
  const handleClick = () => {
    // scroll to bottom (contact)
    scroll.scrollToBottom()
  }

  return (
    <div className="about">
      <BigText fileN="About" isBright={false} />
      <div className="col-1">
        <div className="row-1">
          <ScrollAnimation
            className="title"
            animateIn="animate__fadeIn"
            duration={0.5}
            delay={500}
            animateOnce
          >
            Who I am ?
          </ScrollAnimation>
        </div>
        <div className="row-2">
          <ScrollAnimation
            className="content"
            animateIn="animate__fadeInUp"
            duration={1.5}
            delay={500}
            animateOnce
          >
            I’m
            {' '}
            <b>Tsung-Yu Chien</b>
            , everyone calls me
            {' '}
            <b>Jamie</b>
            {' '}
            in English.
            I’m a frontend developer located in
            {' '}
            <b>Taipei, Taiwan</b>
            .
            I am passionate about creating many interesting apps or webs to solve problems
            I meet in life. Interesting in learning new technologies and diving into them.
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          className="row-3"
          offset={0}
          animateIn="animate__fadeIn"
          duration={1}
          delay={1000}
          animateOnce
        >
          <Button text="CONTACT ME" color="#e7e7e5" handleClick={() => handleClick()} />
        </ScrollAnimation>
      </div>
      <div className="col-2" />
    </div>
  )
}

export default About
