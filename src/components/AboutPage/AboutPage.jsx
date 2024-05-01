import React from 'react'
import Hero from '../Hero'
import { content } from "../../Content";
import Splits from './Splits';
import Contact from '../Contact';

const AboutPage = () => {
    return (
        <div>
            <Hero content={content.heroAboutUs} />
            <Splits split={content.split[0]} />
            <Splits split={content.split[1]} />
            <br/><br/>
            <Contact/>
        </div>
    )
}

export default AboutPage
