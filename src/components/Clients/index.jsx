import React, {useContext} from 'react'
import { Button } from '../ButtonElement';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    ClientsContainer,
    TextureBg,
    ImageBg,
    ContentWrapper,
    ServiceTitle,
    ServiceDesc,
    CardWrapper,
    ClientLogo
} from './ClientsElements';
import ringBg from '../../images/ring_bg.png';
import adidas from '../../images/clients/adidas.png';
import airbnb from '../../images/clients/airbnb.png';
import amazon from '../../images/clients/amazon.png';
import asus from '../../images/clients/asus.png';
import coca_cola from '../../images/clients/coca_cola.png';
import disney from '../../images/clients/disney.png';
import microsoft from '../../images/clients/microsoft.png';
import netflix from '../../images/clients/netflix.png';
import nike from '../../images/clients/nike.png';
import puma from '../../images/clients/puma.png';

const Clients = () => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <ClientsContainer id='clients'>
                <TextureBg>
                    <ImageBg src={ringBg}/>
                </TextureBg>
                <ContentWrapper>
                    <ServiceTitle>Our Amazing Clients</ServiceTitle>
                    <ServiceDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</ServiceDesc>
                    <CardWrapper>
                        <ClientLogo src={adidas}/>
                        <ClientLogo src={airbnb}/>
                        <ClientLogo src={amazon}/>
                        <ClientLogo src={asus}/>
                        <ClientLogo src={coca_cola}/>
                        <ClientLogo src={disney}/>
                        <ClientLogo src={microsoft}/>
                        <ClientLogo src={netflix}/>
                        <ClientLogo src={nike}/>
                        <ClientLogo src={puma}/>
                    </CardWrapper>
                </ContentWrapper>
            </ClientsContainer>
        </ThemeProvider>
    )
}

export default Clients
