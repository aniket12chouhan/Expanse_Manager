import React from 'react'
import NavBar from './component/NavBar'
import HeroSection from './component/HeroSection'
import CardSection from './component/CardSection'
import PieChart from './component/PieChart'
import ListGroup from './component/ListGroup'
import Footer from './component/Footer'

const App = () => {
    return (
        <>

            <NavBar />
            <div class="margin-container">

                <HeroSection />

                <CardSection />

                <PieChart/>

                {/* <!-- transction-section list list-group --> */}

               <ListGroup/>

               <Footer/>

            </div>

        </>
    )
}

export default App