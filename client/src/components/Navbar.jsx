import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto w-100 md:px-20 px-6 mt-8 fixed z-10'>
            <div className="navbar bg-base-200 rounded-full p-4 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                      
                    </div>

                    {/* title */}
                    <a className="btn btn-ghost text-2xl font-bol font-semibold ">Alfahad</a>


                    {/* navbar list */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Templates</a></li>
                            <li><a>Marketplace</a></li>
                            <li><a>Discover</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Learn</a></li>
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                <a className="btn btn-active mx-2 bg-200 outline-none border-none " onClick={() =>document.getElementById('my_modal_3').showModal()}>Login</a><Login/>

                <Link to={'/signup'} className="btn btn-active mr-5 bg-black text-white outline-none border-none rounded-full">Sign up free</Link>
                </div>
            </div>

        </div>
    )
}


export default Navbar