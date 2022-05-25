import React from 'react'
import './footer.scss'
// icons
import { AiOutlineMedium } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { VscMail, VscPreview } from 'react-icons/vsc'

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="title">
          CONTACT
        </div>
        <div className="split-line" />
        <div className="content">
          <div className="mail">
            tsungyu927@gmail.com
          </div>
          <div className="phone">
            (+886) 975 404368
          </div>
        </div>
        <div className="icon">
          <button type="button" className="link">
            <VscMail />
          </button>
          <button type="button" className="link">
            <FiGithub />
          </button>
          <button type="button" className="link">
            <AiOutlineMedium />
          </button>
          <button type="button" className="link">
            <VscPreview />
          </button>
        </div>
        <div className="copyright">
          Copyright © 2022 Tsung-Yu Chien. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
