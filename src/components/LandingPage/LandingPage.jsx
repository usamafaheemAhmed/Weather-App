import React from 'react'
import Hero from '../Hero'
import Services from '../Services'
import Testimonials from '../Testimonials'
import Contact from '../Contact'

import { content } from "../../Content";


const LandingPage = () => {
    return (
        <div>
            <Hero content={content.hero} />
            <Services />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default LandingPage
