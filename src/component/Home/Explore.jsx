import bigman from '../../assets/bigman.jpeg';
import home1 from '../../assets/home1.jpeg'
import cafe from '../../assets/cafs.jpeg'
import car from '../../assets/car1.jpeg'
import beach1 from '../../assets/beach1.jpeg'
import food from '../../assets/food.jpeg'
import office from '../../assets/office.jpeg'

const Explore = () => {

  return (
    <div className='bg-gray-100'>
        <section id='explore'>
            <div className='text-center'>
                <h1 className='pt-[70px] pb-5 text-2xl'>EXPLORE</h1>
                <p className='pb-[40px] text-base'>Explore New place, food, culture around the world and many more</p>
            </div>
            <div id='container'>
                  <div>
                  <img src={home1} alt="" />
                    <div className="px-4">
                    <div id="name">
                            <h1>HOME</h1>
                      </div>
                      <div id="rates">
                        <p className="bg-green-600 text-white px-1">3.5</p>
                        <p>5 Ratings</p>
                        <div id="widths"></div>
                        <p>50k$-300k$</p>
                        <div id="widths"></div>
                        <p>Home</p>
                      </div>
                      <div id="about">
                        <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={bigman} alt="" />
                        <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation</p>
                      </div>
                      <hr />
                      <div id="time">
                          <p>Close Now</p>
                      </div>
                    </div>
                      
                      
                  </div>
                  <div>
                      <img src={cafe} alt="" />
                      <div className="px-4">
                      <div id="name">
                            <h1>HOME CAFE</h1>
                      </div>
                      <div id="rates">
                        <p className="bg-green-600 text-white px-1">3.5</p>
                        <p>5 Ratings</p>
                        <div id="widths"></div>
                        <p>5$-30$</p>
                        <div id="widths"></div>
                        <p>Cafe</p>
                      </div>
                      <div id="about">
                        <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={bigman} alt="" />
                        <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation</p>
                      </div>
                      <hr />
                      <div id="time">
                          <p>Close Now</p>
                      </div>
                      </div>
                     
                  </div>
                  <div>
                      <img src={car} alt="" />
                      <div className="px-4">
                      <div id="name">
                            <h1>CAR</h1>
                      </div>
                      <div id="rates">
                        <p className="bg-green-600 text-white px-1">5.0</p>
                        <p>15 Ratings</p>
                        <div id="widths"></div>
                        <p>100k$-500k$</p>
                        <div id="widths"></div>
                        <p>LAutomotion</p>
                      </div>
                      <div id="about">
                        <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={bigman} alt="" />
                        <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation</p>
                      </div>
                      <hr />
                      <div id="time">
                          <p>Close Now</p>
                      </div>
                  </div>
                      </div>
                      
                  <div>
            <img src={beach1} alt="" />
                <div className="px-4">
                    <div id="name">
                        <h1>Europe Beach</h1>
                    </div>
                    <div id="rates">
                    <p className="bg-green-600 text-white px-1">3.5</p>
                    <p>9 Ratings</p>
                    <div id="widths"></div>
                    <p>30$-50$</p>
                    <div id="widths"></div>
                    <p>Beach</p>
                    </div>
                    <div id="about">
                    <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={bigman} alt="" />
                    <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation</p>
                    </div>
                    <hr />
                    <div id="time">
                        <p>Close Now</p>
                    </div>
                </div>
        </div>         
        <div>
            <img src={food} alt="" />
            <div className="px-4">
                <div id="name">
                    <h1>Europe Tour</h1>
                </div>
                <div id="rates">
                    <p className="bg-green-600 text-white px-1">5.0</p>
                    <p>12 Ratings</p>
                    <div id="widths"></div>
                    <p>100$-500$</p>
                    <div id="widths"></div>
                    <p>Beach</p>
                </div>
                <div id="about">
                    <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={bigman} alt="" />
                    <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation</p>
                </div>
                <hr />
                <div id="time">
                    <p>Close Now</p>
                </div>
            </div>
        </div>
        <div>
            <img src={office} alt="" />
            <div className="px-4">
                <div id="name">
                    <h1>Home Office</h1>
                </div>
                <div id="rates">
                    <p className="bg-green-600 text-white px-1">5.0</p>
                    <p>10 Ratings</p>
                    <div id="widths"></div>
                    <p>10k$-150k$</p>
                    <div id="widths"></div>
                    <p>Office</p>
                </div>
                <div id="about">
                    <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={bigman} alt="" />
                    <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation</p>
                </div>
                <hr />
                <div id="time">
                    <p>Close Now</p>
                </div>
            </div>
        </div>
                 

            </div>      
        </section>
    </div>
  )
}

export default Explore