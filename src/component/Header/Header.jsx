import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const Header = () => {
    const [click, setClick] = useState(true)
    const [toggle, setToggle] = useState(false)

    const handleClick = () =>{
        setClick((prevClick) => !prevClick )
        setToggle(!toggle)
        console.log(click)
    }
  return (
    <React.Fragment>
        <header className=' bg-gray-500 '>
            <nav className=' '>
                <div id="logo">
                    <h1>HomeEstate</h1>
                </div>
                <div id='navs' className={`md:min-h-fit sm:absolute sm:hidden md:block md:static z-10 top-[60px] sm:${toggle ? 'block' : 'hidden'} sm:bg-gray-500 left-0 md:w-auto w-full flex items-center px-5`}>
                    <ul className=' flex md:flex-row flex-col md:items-center md:gap-[4w] gap-8'>
                        <li>
                            <Link  to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/home">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="#">BLOG</Link>
                        </li>
                        <li>
                            <Link to="#">REVIEW</Link>
                        </li>
                        <li>
                            <Link to="#">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden text-2xl cursor-pointer top[9%]'>
                    {
                        click ? <MdOutlineMenu  onClick={handleClick}/>
                        :
                        <IoMdClose onClick={handleClick}/>
                    }
                    
                </div>
            </nav>
        </header>
    </React.Fragment>
  )
}

export default Header