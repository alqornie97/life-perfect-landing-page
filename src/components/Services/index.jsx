import React, {useContext} from 'react'
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    ServiceContainer,
    TextureBg,
    ImageBg,
    ContentWrapper,
    ServiceTitle,
    ServiceDesc,
    CardWrapper,
    Card,
    CardIcon,
    CardText,
    CardTitle,
    CardDesc
} from './ServicesElements';
import ringBg from '../../images/ring_bg.png';
import {AiOutlineLineChart} from 'react-icons/ai';
import {RiMoneyDollarCircleLine, RiOrganizationChart} from 'react-icons/ri';
import {FaGlobeAmericas, FaShippingFast} from 'react-icons/fa';

const Services = () => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <ServiceContainer id='services'>
                <TextureBg>
                    <ImageBg src={ringBg}/>
                </TextureBg>
                <ContentWrapper>
                    <ServiceTitle>Our Services</ServiceTitle>
                    <ServiceDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</ServiceDesc>
                    <CardWrapper>
                        <Card>
                            <CardIcon><AiOutlineLineChart/></CardIcon>
                            <CardText>
                                <CardTitle>Our Services</CardTitle>
                                <CardDesc>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</CardDesc>
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon><RiMoneyDollarCircleLine/></CardIcon>
                            <CardText>
                                <CardTitle>Our Services</CardTitle>
                                <CardDesc>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</CardDesc>
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon><RiOrganizationChart/></CardIcon>
                            <CardText>
                                <CardTitle>Our Services</CardTitle>
                                <CardDesc>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</CardDesc>
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon><FaGlobeAmericas/></CardIcon>
                            <CardText>
                                <CardTitle>Our Services</CardTitle>
                                <CardDesc>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</CardDesc>
                            </CardText>
                        </Card>
                        <Card>
                            <CardIcon><FaShippingFast/></CardIcon>
                            <CardText>
                                <CardTitle>Our Services</CardTitle>
                                <CardDesc>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</CardDesc>
                            </CardText>
                        </Card>
                    </CardWrapper>
                </ContentWrapper>
            </ServiceContainer>
        </ThemeProvider>
    )
}

export default Services
