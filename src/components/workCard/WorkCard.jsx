import React from 'react'
import './workCard.scss'
import PropTypes from 'prop-types'
// animate
import ScrollAnimation from 'react-animate-on-scroll'
// components
import Button from '../button/Button'

/* eslint-disable */
function WorkCard(props) {
  const { content } = props

  return (
      <ScrollAnimation 
        className="workcard" 
        animateIn='animate__fadeInRight'
        duration={1.5}
        delay={500}
        animateOnce={true}
      >
        <div className="col-1">
          <img className="pic" src={require(`../../assets/proj/composite/${content.pic}.png`)} alt={content.pic} />
        </div>
        <div className="col-2">
          <div className="content">
            <div className="title">
              {content.name}
            </div>
            <div className="intro">
              {content.intro}
            </div>
            <div className="tags">
              <ul>
                {content.tags.map((val) => (
                  <li>
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn">
              <Button text="READ MORE" color="#070707" size="small" handleClick={() => content.onClick()} />
            </div>
          </div>
        </div>
      </ScrollAnimation>
  )
}

WorkCard.propTypes = {
  content: PropTypes.shape().isRequired,
}

export default WorkCard
