import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdGpsFixed } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import HomeList from './HomeList';
import News from './News';
const Home = () => {
  return (
    <React.Fragment>
        <section id='home'>
            <div id='home_text'>
                <h1>BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED</h1>
                <p>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
            </div>
            <div id="inputs">
                <div id="home_input">
                    <input id='Ex_Place' type="text" placeholder='Ex Place, Resturant, Food, Automobile' />
                    <GiHamburgerMenu className='absolute right-5 top-4 text-xl'/>
                    <p>What?</p>
                </div>
                <div id='width'></div>
                <div id="home_input">
                    <input id="Ex_Lekki" type="text" placeholder='Ex Lekki, Ikoyi, Ikeja'/>
                    <MdGpsFixed  className='absolute right-5  top-4 text-xl'/>
                    <p>Location</p>
                </div>
                <div id='search'>
                    <p>search <CiSearch/></p>
                </div>
            </div>
        </section>
        <HomeList />
        <News />
    </React.Fragment>
  )
}

export default Home