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
          className="col col-1"
          animateIn="animate__fadeIn"
          duration={1}
          delay={1000}
          animateOnce
        >
          {/* 左邊的tilte */}
          <div className="list-title">
            <BiCodeAlt className="icon" />
            <span className="main">Languages</span>
            <span className="sub">( Frameworks &amp; Libraries )</span>
          </div>
          <div className="list-title">
            <VscTools className="icon" />
            <span className="main">Others</span>
            <span className="sub">( Cloud Services &amp; Tools )</span>
          </div>
        </ScrollAnimation>
        <div className="col col-2">
          {/* 右邊的content */}
          <ScrollAnimation
            className="list"
            animateIn="animate__fadeInRight"
            duration={1.5}
            delay={1500}
            animateOnce
          >
            <div className="list-content">
              {TECH.lang.map((val) => (
                <SkillCard key={val} type={val} />
              ))}
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            className="list"
            animateIn="animate__fadeInRight"
            duration={1.5}
            delay={2000}
            animateOnce
          >
            <div className="list-content">
              {TECH.others.map((val) => (
                <SkillCard key={val} type={val} />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Skills
