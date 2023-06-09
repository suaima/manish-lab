import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/Header'

function Home() {
    return (
        <>
            <Header />

            <Footer subscribeDiv={true} />
        </>
    )
}

export default Home