import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import OurPromise from '../sections/OurPromise'
import PressCoverageSec from '../sections/PressCoverageSec'
import AboutSection from '../sections/AboutSection'

function Home() {
    return (
        <>
            <Header />
            <OurPromise />
            <PressCoverageSec />
            <AboutSection />
            <Footer subscribeDiv={true} />
        </>
    )
}

export default Home