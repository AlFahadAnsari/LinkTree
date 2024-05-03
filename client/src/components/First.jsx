import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
    return (
        <>

            <div className='bg-green-800 w-100 flex  flex-col md:flex-row  '>
                <div className='w-full md:w-1/2 mt-50 md:mx-20 p-5 pb-24'>
                    


                        <div className='pt-40 md:pt-60'>
                            <h1 className='text-6xl md:text-7xl text-[#D2E823] font-bold'>Everything you are. In one, simple link in bio.</h1>
                        </div>

                        <p className=' text-[#D2E823] mt-5'>Join 40M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

                        <input type="text" placeholder="linktree/Username" className="input input-bordered input-accent w-50 max-w-xs mt-5 rounded-lg" />


                        <Link to={'/signup'} className="btn btn-active bg-[#E9C0E9] rounded-full mx-5 mt-2"> Claim your Linktree</Link>

                    </div>



                                {/*  image part */}
                    <div className='w-full md:w-1/2 mt-0 md:mt-52 '>
                       
                    <img src="https://source.unsplash.com/1000x700/?nature,forest" className=' px-8 mb-8 md:p-20' id='img1' alt="hii" />


                    </div>

                </div>



      

              

        </>



    //     <div>

    //     <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row '>
  
    //       <div className='w-full md:w-1/2  order-2 md:order-1 mt-12 md:mt-28 '>
    //         <div className='space-y-10'>
    //           <h1 className='text-4xl font-bold'>hii i am alfahad and this is my project <span className='text-pink-500 '>thnks for viste</span>
    //           </h1>
    //           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sequi voluptate rerum, quis placeat perspiciatis sed. Autem aspernatur illum impedit voluptate saepe quibusdam quos reprehenderit iure beatae recusandae, sapiente expedita doloremque sint minima modi consequatur. Aut fugiat doloribus neque vitae.</p>
  
    //         <label className="input input-bordered flex items-center gap-2">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
    //         <input type="text" className="grow" placeholder="Email" />
    //       </label>
  
    //         </div>
  
    //         <button className="btn btn-secondary mt-6">Secondary</button>
    //       </div>
  
  
  
  
    //   {/*  second parts  */}
  
  
    //       <div className='w-full order-1  md:w-1/2'> 
    //         <img src={banner} className='w-92 h-92' alt=""  />
    //        </div>
  
  
    //     </div>
    //   </div>


    )
}

export default First