import React from 'react'
import PropTypes from 'prop-types'
import './bigtext.scss'
import './bigtext_mobile.scss'

/* eslint-disable */
function BigText(props) {
  const { fileN, isBright } = props

  return (
    <div
      className={`bigtext ${isBright ? 'toRight' : 'toLeft'}`}
    >
      <img src={require(`../../assets/text/${fileN}.png`)} alt={`${fileN}`} />
    </div>
  )
}

BigText.propTypes = {
  fileN: PropTypes.string.isRequired,
  isBright: PropTypes.bool.isRequired,
}

export default BigText
