import React from 'react';
import web from '../src/logo.svg'
import { NavLink } from 'react-router-dom';
import Common from './Common';
// import web from '../src/images/img2.svg'

const About = () => {
    return (
        <>
          <Common name='Welcome to ABout page' imgsrc={web} visit='/contact' btname="Contact Now" />
        </>
    )
}

export default About;
