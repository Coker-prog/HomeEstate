import React from 'react'
import { FaHotel } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import HowItWorks from './HowItWorks';

const HomeList = () => {
  return (
    <React.Fragment>   
        <section id='home_list'>
            <div id="list">
                <div>
                    <FaHotel />
                    <p >Hotels</p>
                    <p><small>185 listings</small></p>
                </div>
                <div>
                    < GiMedicines />
                    <p id='bt'>Healthcare</p>
                    <p><small>200 listings</small></p>
                </div>
                <div>
                    <FaCarSide />
                    <p id='bt'>Automotion</p>
                    <p><small>120 listings</small></p>
                </div>
                <div>
                    <MdFastfood/>
                    <p id='bt'>Resturant</p>
                    <p><small>150 listings</small></p>
                </div>
                <div>
                    <FaCity/>
                    <p id='bt'>City</p>
                    <p><small>230 listings</small></p>
                </div>
            </div>
        </section>
        <HowItWorks/>
    </React.Fragment>
  )
}

export default HomeList