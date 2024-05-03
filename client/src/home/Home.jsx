import React from 'react'
import Navbar from '../components/Navbar'
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Four from '../components/Four'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Collaps from '../components/Collaps'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <First />
            <Second />
            <Third />
            <Four />
            <Carousel />
            <Collaps/>
            <Footer />
        </div>
    )
}

export default Home