import React from 'react'
import { Link } from 'react-router-dom'

const Four = () => {
  return (
    <>

      <div className=' w-100 flex  flex-col md:flex-row '>
       


          <div className='w-full md:w-1/2 mt-0  md:mt-36'>


            <img src="https://source.unsplash.com/1000x700/?nature,water" className='px-8 mt-14 md:p-20 md:mt-0' alt="hii" id='img4' />

          </div>





          {/*  text part */}

          <div className='w-full md:w-1/2 mt-50 md:mx-20 p-5 pb-24'>
          <div className='pt-40 md:pt-40'>
            <h1 className='text-6xl md:text-7xl font-bold'>Analyze your audience and keep your followers engaged</h1>
          </div>

          <p className='  mt-5'>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>


          <Link to={'/signup'} className="btn btn-active  bg-[#E9C0E9]  text-black rounded-full mx-5 mt-4"> Claim your Linktree</Link>

        </div>


      </div>



    </>
  )
}

export default Four