import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import './button_mobile.scss'

function SpecBtn(props) {
  const {
    text, color, handleClick, size,
  } = props
  const [strokeColor] = useState(color === '#e7e7e5' ? color : '#747474')

  return (
    <button
      className={`specbtn ${size}Btn`}
      type="button"
      style={{
        color,
        borderBottomColor: strokeColor,
      }}
      alt={text}
      onClick={() => handleClick()}
    >
      <div className={size}>
        {text}
      </div>
      <div
        className="end-line"
        style={{
          backgroundColor: strokeColor,
        }}
      />
    </button>
  )
}

SpecBtn.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  size: PropTypes.string,
}

SpecBtn.defaultProps = {
  size: 'large',
}

export default SpecBtn
