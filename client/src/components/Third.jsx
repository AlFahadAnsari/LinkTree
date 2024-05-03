import React from 'react'
import { Link } from 'react-router-dom'

const Third = () => {
    return (
        <>

            <div className='bg-[#780016] w-100 flex flex-col md:flex-row  '>
                <div className='w-full md:w-1/2 mt-50 md:mx-20 p-5 pb-24'>


            
                    {/*  text part */}

                    <div className='pt-40 md:pt-60'>
                        <h1 className='text-6xl md:text-7xl text-[#E9C0E9] font-bold'>Share your Linktree from your Instagram, TikTok, Twitter and other bios</h1>
                    </div>

                    <p className=' text-[#E9C0E9] mt-5'>Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>


                    <Link to={'/signup'} className="btn btn-active  bg-[#E9C0E9]  text-black rounded-full mx-5 mt-4"> Claim your Linktree</Link>

                </div>


                <div className='w-full md:w-1/2  mt-0 md:mt-52'>
                       
                       <img src="https://source.unsplash.com/1000x700/?nature,cloud" className='px-8 mb-8 md:p-20' alt="hii" id='img3' />
   
   
                       </div>


            </div>



        </>
    )
}

export default Third