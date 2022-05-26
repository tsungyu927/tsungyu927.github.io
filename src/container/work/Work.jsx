import React, { useState } from 'react'
import './work.scss'
// animate
import ScrollAnimation from 'react-animate-on-scroll'
// data
import work from '../../data/work.json'
// components
import { BigText, WorkCard, WorkModal } from '../../components'

function Work() {
  const [open, setOpen] = useState(false)
  const [dataToOpen, setData] = useState({})

  const handleModal = () => {
    setOpen((prev) => !prev)
  }

  const handleClick = (val) => {
    handleModal() // call func to open/close modal
    setData(val)
  }

  return (
    <div className="work">
      {open ? (
        <WorkModal data={dataToOpen} handleClick={() => handleModal()} />
      ) : ''}
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
          {work.map((val) => <WorkCard content={val} handleClick={() => handleClick(val)} />)}
        </div>
      </div>
    </div>
  )
}

export default Work
