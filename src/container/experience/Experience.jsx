import React from 'react'
import './experience.scss'
import { IoTriangleSharp } from 'react-icons/io5'
// animation
import ScrollAnimation from 'react-animate-on-scroll'
// components
import { BigText, ExpCard } from '../../components'

function Experience() {
  return (
    <div className="exp">
      <BigText fileN="Exp" isBright />
      <div className="col-1">
        <div className="row-1">
          <ScrollAnimation
            className="title"
            animateIn="animate__fadeIn"
            duration={0.5}
            delay={500}
            animateOnce
          >
            Where I&#39;ve worked ?
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          className="row-2"
          animateIn="animate__fadeIn"
          duration={1}
          delay={1000}
          animateOnce
        >
          <IoTriangleSharp className="triangle" />
          <div className="card-container">
            <ExpCard />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Experience