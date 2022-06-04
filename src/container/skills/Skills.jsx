import React from 'react'
import './skills.scss'
import './skill_mobile.scss'
// animation
import ScrollAnimation from 'react-animate-on-scroll'
// icons
import { BiCodeAlt } from 'react-icons/bi'
import { VscTools } from 'react-icons/vsc'
// components
import { BigText, SkillCard } from '../../components'
// data
import TECH from '../../data/technologies.json'

function Skills() {
  return (
    <div className="skills">
      <BigText fileN="Skills" isBright={false} />
      <div className="row-1">
        <ScrollAnimation
          className="title"
          animateIn="animate__fadeIn"
          duration={0.5}
          delay={500}
          animateOnce
        >
          Which technologies I use ?
        </ScrollAnimation>
      </div>
      <div className="row-2">
        <ScrollAnimation
          className="title lang-title"
          animateIn="animate__fadeIn"
          duration={1}
          delay={1000}
          animateOnce
        >
          {/* Language tilte */}
          <div className="list-title">
            <BiCodeAlt className="icon" />
            <span className="main">Languages</span>
            <span className="sub">( Frameworks &amp; Libraries )</span>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="title other-title"
          animateIn="animate__fadeIn"
          duration={1}
          delay={1000}
          animateOnce
        >
          {/* Others tilte */}
          <div className="list-title">
            <VscTools className="icon" />
            <span className="main">Others</span>
            <span className="sub">( Cloud Services &amp; Tools )</span>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="content lang-content"
          animateIn="animate__fadeInRight"
          duration={1.5}
          delay={1500}
          animateOnce
        >
          {/* Language content */}
          <div className="list-content">
            {TECH.lang.map((val) => (
              <SkillCard key={val} type={val} />
            ))}
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="content other-content"
          animateIn="animate__fadeInRight"
          duration={1.5}
          delay={2000}
          animateOnce
        >
          {/* Others content */}
          <div className="list-content">
            {TECH.others.map((val) => (
              <SkillCard key={val} type={val} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Skills
