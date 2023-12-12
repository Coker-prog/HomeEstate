import React from 'react'
import  PropTypes from 'prop-types'
const ExploreData = ({data}) => {
  return (
    <React.Fragment>
        <section id='explores'>
            <img src={data.img} alt={data.name} />
            <div className='px-4'>
                <div id='name'>
                    <h1>{data.name}</h1>
                </div>
                <div id='rates'>
                    <p className='bg-green-600 text-white px-1'>{data.ratings}</p>
                    <p>{data.rates}</p>
                    <div id='widths'></div>
                    <p>{data.From}</p>
                    <div id='widths'></div>
                    <p>{data.locations}</p>
                </div>
            
                <div id='about'>
                    <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={data.man} alt={data.name} />
                    <p>{data.about}</p>
                </div>
                <hr />
                <div id="time">
                <p>{data.time}</p>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

ExploreData.propTypes = {
    data: PropTypes.object.isRequired
}
export default ExploreData