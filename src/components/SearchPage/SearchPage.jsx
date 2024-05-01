import React from 'react'
import Hero from '../Hero'
import { content } from "../../Content";
import Search from './Search';
import Contact from '../Contact';
import Splits from '../AboutPage/Splits';


const SearchPage = () => {
  return (
    <div>
      <Hero content={content.hero} SImg={true} />
      <Search />
      <Splits split={content.split[0]} />
      <br/>
      <br/>
      <Contact/>
    </div>
  )
}

export default SearchPage
