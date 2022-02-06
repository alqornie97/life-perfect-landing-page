import React, {useEffect, useState, useContext} from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll } from 'react-scroll';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    Nav,
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink,
    NavLogoImg
} from './NavbarElements';
import mainLogo from '../../images/main_logo.png';

const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false);
    const theme = useContext(ThemeContext);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        animateScroll.scrollToTop();
    }

    return (
        <ThemeProvider theme={theme}>
            <IconContext.Provider value={{color: theme.light}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <NavLogoImg
                                src={mainLogo} 
                                alt='Main Logo'
                            />
                        </NavLogo>
                        <MobileIcon onClick={props.toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink 
                                    to='howitworks'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >How it Works</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    to='services'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    to='clients'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Clients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    to='articles'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Articles</NavLink>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </ThemeProvider>
    )
}

export default Navbar
