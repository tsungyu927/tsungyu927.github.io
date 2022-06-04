import React from 'react'
import './workModal.scss'
import './workModal_mobile.scss'
import PropTypes from 'prop-types'
// icon
import { IoMdClose } from 'react-icons/io'

/* eslint-disable */
function WorkModal(props) {
  const { data, handleClick } = props

  const handleClickLink = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="workmodal">
      <div className="back" />
      <div className="modal">
        <div className="title">
          {data.name}
        </div>
        <button type="button" className="close" onClick={() => handleClick()}>
          <IoMdClose className="icon" />
        </button>
        <div className="content">
          <div className="row">
            <div className="sub-row-1">
              Introduction
            </div>
            <div className="sub-row-2">
              {data.intro}
            </div>
          </div>
          <div className="row">
            <div className="sub-row-1">
              Timeline
            </div>
            <div className="sub-row-2">
              {data.intro}
            </div>
          </div>
          <div className="row">
            <div className="sub-row-1">
              Technologies
            </div>
            <div className="tags">
              <ul>
                {data.tags.map((val) => (
                  <li key={val}>
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pic">
          <img src={require(`../../assets/proj/composite/${data.pic}.png`)} alt={data.pic} />
        </div>
        <div className="btn">
          {data.link.map((val) => (
            <button key={val.name} type="button" onClick={() => handleClickLink(val.url)}>
              {val.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

WorkModal.propTypes = {
  data: PropTypes.shape().isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default WorkModal
