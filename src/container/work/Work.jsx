import React from 'react'
import './work.scss'
// animate
import ScrollAnimation from 'react-animate-on-scroll'
// data
import work from '../../data/work.json'
// components
import { BigText, WorkCard } from '../../components'

function Work() {
  return (
    <div className="work">
      <BigText fileN="Work" isBright />
      <div className="row-1">
        <ScrollAnimation
          className="title"
          animateIn="animate__fadeIn"
          duration={0.5}
          delay={500}
          animateOnce
        >
          What I&#39;ve done ?
        </ScrollAnimation>
      </div>
      <div className="row-2">
        <div className="card-container">
          {work.map((val) => <WorkCard content={val} />)}
        </div>
      </div>
    </div>
  )
}

export default Work
