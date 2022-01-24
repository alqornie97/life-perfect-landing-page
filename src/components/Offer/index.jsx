import React, {useContext} from 'react'
import { Button } from '../ButtonElement';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    OfferContainer,
    TextureBg,
    ImageBg,
    ContentWrapper,
    OfferText,
    OfferTitle,
    OfferDesc,
    OfferButton
} from './OfferElements';
import ringBg from '../../images/ring_bg.png';

const Offer = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <OfferContainer id='services'>
                <TextureBg>
                    <ImageBg src={ringBg}/>
                </TextureBg>
                <ContentWrapper>
                    <OfferText>
                        <OfferTitle>Sign Up Now</OfferTitle>
                        <OfferDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</OfferDesc>
                    </OfferText>
                    <OfferButton>
                    <Button 
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={1}
                    >Get Your Offer</Button>
                    </OfferButton>
                </ContentWrapper>
            </OfferContainer>
        </ThemeProvider>
    )
}

export default Offer
