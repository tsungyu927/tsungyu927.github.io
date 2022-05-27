import React from 'react'
import './expCard.scss'
import PropTypes from 'prop-types'
import { GiPlainCircle } from 'react-icons/gi'
import { IoTriangleSharp } from 'react-icons/io5'
// animate
import ScrollAnimation from 'react-animate-on-scroll'

function ExpCard(props) {
  const { data } = props

  return (
    <ScrollAnimation
      className="expcard"
      animateIn="animate__fadeIn"
      duration={1}
      delay={1500}
      animateOnce
    >
      <GiPlainCircle className="dot" />
      <div className="content">
        <div className="title">
          {`${data.title} `}
          <span>
            &nbsp;
            {`@${data.company}`}
          </span>
        </div>
        <div className="info">
          {data.time}
          &emsp;
          {`// ${data.location}`}
        </div>
        <div className="detail">
          {data.detail.map((val) => (
            <div key={val} className="item">
              <div className="icon">
                <IoTriangleSharp className="triangle" />
              </div>
              <div className="text">
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  )
}

ExpCard.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default ExpCard
