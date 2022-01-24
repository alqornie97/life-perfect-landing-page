import React, {useContext} from 'react';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    CloseIcon, 
    Icon,
    SidenavContainer,
    SidenavWrapper,
    SidenavMenu,
    SidenavLink,
    SideBtnWrap,
    SidenavRoute 
} from './SidenavElements';


const Sidenav = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <SidenavContainer isOpen={props.isOpen}>
                <Icon onClick={props.toggle}>
                    <CloseIcon/>
                </Icon>
                <SidenavWrapper>
                    <SidenavMenu>
                        <SidenavLink 
                            onClick={props.toggle} 
                            to='howitworks'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >How it Works</SidenavLink>
                        <SidenavLink 
                            onClick={props.toggle} 
                            to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Services</SidenavLink>
                        <SidenavLink 
                            onClick={props.toggle} 
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >About</SidenavLink>
                        <SidenavLink 
                            onClick={props.toggle} 
                            to='clients'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Clients</SidenavLink>
                        <SidenavLink 
                            onClick={props.toggle} 
                            to='articles'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Articles</SidenavLink>
                    </SidenavMenu>
                    <SideBtnWrap>
                        <SidenavRoute onClick={props.toggle} to='/signin'>Sign In</SidenavRoute>
                    </SideBtnWrap>
                </SidenavWrapper>
            </SidenavContainer>
        </ThemeProvider>
    )
}

export default Sidenav
