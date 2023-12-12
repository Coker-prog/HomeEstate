import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { GiHook } from "react-icons/gi";
import { LuVideotape } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Explore from './Explore';
const HowItWorks = () => {
    // const [ active, setActive ] =useState(false)
    // const handleClick = () => {
    //     setActive((prevClick) => !prevClick)
    // };
  return (
    <React.Fragment>
        <section id='works'>
            <div id='work_title'>
                <h1>HOW IT WORKS</h1>
                <p>Learn More about how our website works</p>
            </div>
            <div id="cards">
                <div id="card">
                    <MdLightbulbOutline />
                    <h3>Choose what to Do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus voluptate ducimus quaerat minima, sapiente illum.
                     Eos impedit minus, recusandae aperiam in rerum, dolorem, quod consequuntur cupiditate eveniet esse aliquam?</p>
                     <Link to="#">Read More</Link>
                </div>
                <div id="card">
                    <GiHook/>
                    <h3>Choose what to Do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus voluptate ducimus quaerat minima, sapiente illum.
                     Eos impedit minus, recusandae aperiam in rerum, dolorem, quod consequuntur cupiditate eveniet esse aliquam?</p>
                     <Link to="#">Read More</Link>
                </div>
                <div id="card">
                    <LuVideotape />
                    <h3>Choose what to Do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus voluptate ducimus quaerat minima, sapiente illum.
                     Eos impedit minus, recusandae aperiam in rerum, dolorem, quod consequuntur cupiditate eveniet esse aliquam?</p>
                     <Link to="#">Read More</Link>
                </div>
            </div>
        </section>
        <Explore />
    </React.Fragment>
  )
}

export default HowItWorks