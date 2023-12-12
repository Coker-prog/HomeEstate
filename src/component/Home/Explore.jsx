import CircularProgress from '@mui/material/CircularProgress';
// import home1 from '../../assets/home1.jpeg'
import { useState, useEffect } from 'react'
import ExploreData from './ExploreData'
const Explore = () => {
  const [datas, setDatas] = useState([])
  const [ isLoading, setIsLoading] =useState(true)
  const [ error, setError] = useState("")
  console.log(datas)
  useEffect(() => {
    fetch(' http://localhost:3000/Estates')
    .then((res) => {
      if(!res.ok){
        throw new Error("couldn't fetch data from server")
      }
      console.log(res)
      return res.json()
    })
    .then((res) => {
      console.log(res)
      setDatas(res)
      setIsLoading(false)
      setError(false)
    })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false)
    })
  },[]);
  return (
    <div className='bg-gray-100'>
        <section id='explore'>
            <div className='text-center'>
                <h1 className='pt-[70px] pb-5 text-2xl'>EXPLORE</h1>
                <p className='pb-[40px] text-base'>Explore New place, food, culture around the world and many more</p>
            </div>
            {error && <div className='text-center text-2xl'>{error}</div>}
            {
              isLoading ? < div className=" flex justify-center items-center h-[30vh] text-xl"> <CircularProgress /></div> 
              :
              <div id='container'>
                {datas.map((data) => (
                  <div id="preview" key={data.id}>
                    <ExploreData  data={data} key={data.id}/>
                  </div>
                ))}
            </div>
            }
            
        </section>
    </div>
  )
}

export default Explore