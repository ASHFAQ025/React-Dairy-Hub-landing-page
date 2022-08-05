import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <div className='container text-center'>
    <h2 className='popular_product'>About Us</h2>
    <p>
    Choose froman unrivaled set of best-in-class website <br />
     templates. customize the design to fit your personal <br />
      style and proffesional needs.
    </p>
    <ul className='d-flex list-unstyled justify-content-center about_learn'>
    <li>
    <a href="#">Browse Template <BsArrowRight /></a>
    </li>
    <li>
    <a href="#">Learn More</a>
    </li>
    </ul>
    </div>
  )
}

export default About
