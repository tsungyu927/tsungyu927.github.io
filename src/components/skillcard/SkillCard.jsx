import React from 'react'
import './skillCard.scss'
import PropTypes from 'prop-types'
// components
import Icon from '../icon/Icon'

function SkillCard(props) {
  const { type } = props

  return (
    <div className="skillcard">
      <div className="icon">
        <Icon type={type} className="icon-content" />
      </div>
      <div className="name">
        {type}
      </div>
    </div>
  )
}

SkillCard.propTypes = {
  type: PropTypes.string.isRequired,
}

export default SkillCard
