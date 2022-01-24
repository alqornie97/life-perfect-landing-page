import React, {useContext} from 'react';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin 
} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    FooterInfo,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,
    CompanyInfo,
    CompanyLogo,
    CompanyDesc,
    WebsiteRights,
    SocialIconLink,
    SocialIcons,
    ImgLogo
} from './FooterElements';
import mainLogo from '../../images/main_logo.png';

const Footer = () => {
    const theme = useContext(ThemeContext);
    return (
        <ThemeProvider theme={theme}>
            <FooterContainer>
                <FooterWrap>
                    <FooterInfo>
                        <CompanyInfo>
                            <CompanyLogo to='/'>
                                <ImgLogo src={mainLogo}/>Life Perfect
                            </CompanyLogo>
                            <CompanyDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</CompanyDesc>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </CompanyInfo>
                        <FooterLinksContainer>
                            <FooterLinksWrapper>
                                <FooterLinkItems>
                                    <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to='/'>How it works</FooterLink>
                                    <FooterLink to='/'>Testimonials</FooterLink>
                                    <FooterLink to='/'>Careers</FooterLink>
                                    <FooterLink to='/'>Investors</FooterLink>
                                    <FooterLink to='/'>Terms of Service</FooterLink>
                                </FooterLinkItems>
                                <FooterLinkItems>
                                    <FooterLinkTitle>Videos</FooterLinkTitle>
                                    <FooterLink to='/'>Submit VIdeo</FooterLink>
                                    <FooterLink to='/'>Ambassadors</FooterLink>
                                    <FooterLink to='/'>Agency</FooterLink>
                                    <FooterLink to='/'>Influencer</FooterLink>
                                </FooterLinkItems>
                            </FooterLinksWrapper>
                            <FooterLinksWrapper>
                                <FooterLinkItems>
                                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to='/'>Contact</FooterLink>
                                    <FooterLink to='/'>Support</FooterLink>
                                    <FooterLink to='/'>Destinations</FooterLink>
                                    <FooterLink to='/'>Sponsorships</FooterLink>
                                </FooterLinkItems>
                                <FooterLinkItems>
                                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to='/'>Instagram</FooterLink>
                                    <FooterLink to='/'>Facebook</FooterLink>
                                    <FooterLink to='/'>Youtube</FooterLink>
                                    <FooterLink to='/'>Twitter</FooterLink>
                                </FooterLinkItems>
                            </FooterLinksWrapper>
                        </FooterLinksContainer>
                    </FooterInfo>
                    <WebsiteRights>Life Perfect © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                </FooterWrap>
            </FooterContainer>
        </ThemeProvider>
    )
}

export default Footer
