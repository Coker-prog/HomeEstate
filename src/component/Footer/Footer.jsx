import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <React.Fragment>
      <section id='footer'>
      <div className="footer_logo">
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <AiFillYoutube />
            </div>
            <div className="footer_text">
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy & Policy</a>
                <a href="#">Press Room</a>
            </div>
            <div className="footer_right">
                <p>&copy; 2023 Real Estate by Gbolahan Opeyemi Coker</p>
            </div>
      </section>
    </React.Fragment>
  )
}

export default Footer