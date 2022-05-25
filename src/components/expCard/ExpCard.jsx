import React from 'react'
import './expCard.scss'
import { GiPlainCircle } from 'react-icons/gi'
import { IoTriangleSharp } from 'react-icons/io5'
// animate
import ScrollAnimation from 'react-animate-on-scroll'

function ExpCard() {
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
          Software Engineer Intern
          {' '}
          <span>&nbsp;@MyBigDay</span>
        </div>
        <div className="info">
          July 2020 - June 2021&emsp;// Taipei, Taiwan
        </div>
        <div className="detail">
          <div className="item">
            <div className="icon">
              <IoTriangleSharp className="triangle" />
            </div>
            <div className="text">
              Developed responsive web pages using React, Redux, CSS
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <IoTriangleSharp className="triangle" />
            </div>
            <div className="text">
              Implemented Line Bots using Node.js and Bottender.js
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <IoTriangleSharp className="triangle" />
            </div>
            <div className="text">
              Built server-side rendered web app and deployed to Google Cloud Platform (Firebase)
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <IoTriangleSharp className="triangle" />
            </div>
            <div className="text">
              Collaborated with designers to create new Line integrations
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <IoTriangleSharp className="triangle" />
            </div>
            <div className="text">
              Implemented BLE (Bluetooth Low Energy) communication system on Raspberry Pi and
              Android using Node.js and React Native
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default ExpCard
