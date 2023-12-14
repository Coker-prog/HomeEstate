import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevClick) => !prevClick);
    console.log(toggle);
  };
  return (
    <React.Fragment>
      <header className=" bg-gray-500 flex items-center justify-between h-[60px] ">
          <div id="logo" className="sm:pl-[20px] md:pl-[80px]">
            <h1>HomeEstate</h1>
          </div>
          <div className="sm:hidden md:static  md:flex pr-[80px]">
            <Link to={"/"} className="px-5">
              <p>HOME</p>
            </Link>
            <Link to={"#"} className="px-5">
              <p>ABOUT US</p>
            </Link>
            <Link to={"#"} className="px-5">
              <p>SERVICE</p>
            </Link>
            <Link to={"#"} className="px-5">
              <p>CONTACT</p>
            </Link>
          </div>

          <div className="relative md:hidden pr-[20px] ">
            <div className="text-2xl cursor-pointer">
              {!toggle ? (
                <MdOutlineMenu onClick={handleClick} />
              ) : (
                <IoMdClose onClick={handleClick} />
              )}
            </div>
            {toggle && (
              <div className="absolute right-0 bg-gray-500 w-[100vw] mt-[16px] pl-[20px]">
                <Link to={"/"} className="px-5">
                  <p>HOME</p>
                </Link>
                <Link to={"#"} className="px-5">
                  <p>ABOUT US</p>
                </Link>
                <Link to={"#"} className="px-5">
                  <p>SERVICE</p>
                </Link>
                <Link to={"#"} className="px-5">
                  <p>CONTACT</p>
                </Link>
              </div>
            )}
          </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
