import React, { useState } from 'react'
import Navbar from './../components/Navbar/index';
import Sidenav from './../components/Sidenav/index';
import Headline from './../components/Headline/index';
import InfoSection from './../components/InfoSection/index';
import Services from '../components/Services/index';
import { 
    homeObjOne, 
    homeObjTwo, 
} from '../components/InfoSection/Data';
import Clients from './../components/Clients/index';
import Articles from './../components/Articles/index';
import Offer from './../components/Offer/index';
import Footer from './../components/Footer/index';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidenav isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Headline/>
            <InfoSection {...homeObjOne}/>
            <Services/>
            <InfoSection {...homeObjTwo}/>
            <Clients/>
            <Articles/>
            <Offer/>
            <Footer/>
        </>
    )
}

export default Home
