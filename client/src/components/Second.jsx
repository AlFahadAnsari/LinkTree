import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
    return (
        <>
            <div className='bg-[#E9C0E9] w-100 flex   flex-col md:flex-row '>
                


                <div className='w-full md:w-1/2 mt-0  md:mt-40'>
                       
                       <img src="https://source.unsplash.com/1000x700/?nature,animal" className='px-8 mt-15 md:p-20 ' alt="hii" id='img2' />
   
   
                       </div>



                    {/*  text part */}

                    <div className='w-full md:w-1/2 mt-50 md:mx-20 p-5 pb-32'>
                    <div className='pt-20 md:pt-40'>
                        <h1 className='text-6xl md:text-7xl text-[#502274] font-bold'>Create and customize your Linktree in minutes.</h1>
                    </div>

                    <p className=' text-[#502274] mt-5'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>

                
                    <Link to={'/signup'} className="btn btn-active  bg-[#502274]  text-white rounded-full mx-5 mt-5"> Claim your Linktree</Link>

                </div>


            </div>


        </>
    )
}

export default Second