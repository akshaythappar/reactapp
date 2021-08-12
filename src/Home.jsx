import React from 'react';
import web from '../src/logo.svg'
import { NavLink } from 'react-router-dom';
import Common from './Common';

import Contact from './Contact';
import About from './About' 
import Service from './Service'

const Home = () => {
    return (
        <>
           <Common  name='Grow your buisness with' imgsrc={web} visit='/service' btname="Get Started" />
           <Service/>
           <Contact/>
        </>
    )
}

export default Home;
