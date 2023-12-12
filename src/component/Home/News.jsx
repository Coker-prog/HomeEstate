import React from 'react'
import home1 from "../../assets/home1.jpeg"
import home3 from "../../assets/home3.jpeg"
import home4 from "../../assets/home4.jpeg"
const News = () => {
  return (
    <React.Fragment>
        <section className='mt-[70px]'>
            <div className='text-center'>
                <h1 className='text-2xl pb-5'>NEW AND ARTICLES</h1>
                <p className='text-lg pb-7'>Always upto date with our latetst News and Articles</p>
            </div>
            <div className='xl:w-[70%] xl:m-[auto] sm:w-[85%] sm:m-[auto] gap-5 grid xl:grid-cols-3 md:grid-cols-2  mt-[50px]'>
                <div >
                    <img src={home1} alt="" />
                    <div className='px-4 py-[40px] bg-floralWhite '>
                        <div>
                            <h1>How to find your Desired Place more quickly</h1>
                        </div>
                        <div className='flex pb-3 items-center justify-between'> 
                            <p className='text-base pt-3'>posted by <b>ADMIN</b></p>
                            <p  id='widths'></p>
                            <p>March 2045</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
                <div>
                    <img src={home3} alt="" />
                    <div className='px-4 py-[40px] bg-floralWhite'>
                        <div  className=' bg-floralWhite '>
                            <h1>How to find your Desired Place more quickly</h1>
                        </div>
                        <div className='flex pb-3 items-center justify-between'>
                            <p className='text-base pt-3'>posted by <b>ADMIN</b></p>
                            <p></p>
                            <p>March 2045</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
                <div>
                    <img src={home4} alt="" />
                    <div className='bg-floralWhite px-4 py-[40px]'>
                        <div className='  '> 
                            <h1>How to find your Desired Place more quickly</h1>
                        </div>
                        <div className='flex items-center justify-between pb-3'>
                            <p className='text-base pt-3'>posted by <b>ADMIN</b></p>
                            <p></p>
                            <p>March 2045</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default News