import React, {useContext} from 'react'
import { Button } from './../ButtonElement';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import ringBg from '../../images/ring_bg.png';
import { 
    InfoContainer,
    InfoWrapper,
    TextureBg,
    ImageBg,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    InfoRow, 
    ImgWrap,
    RowImg,
    ColImg,
    ContainerImg
} from './InfoElements';

const InfoSection = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <InfoContainer lightBg={props.lightBg} id={props.id}>
                    <TextureBg>
                        <ImageBg src={ringBg}/>
                    </TextureBg>
                    <InfoWrapper>
                        <InfoRow imgStart={props.imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <Heading lightText={props.lightText}>{props.headline}</Heading>
                                    <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                                    <BtnWrap>
                                        <Button 
                                            to='home'
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact='true'
                                            offset={-80}
                                            primary={props.primary ? 1 : 0}
                                            dark={props.dark ? 1 : 0}
                                            dark2={props.dark2 ? 1 : 0}
                                        >{props.buttonLabel}</Button>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <RowImg>
                                        <ContainerImg style={{
                                            width: '180px',
                                            height: '320px'
                                        }}>
                                            <img 
                                                src={props.img1} 
                                                alt={props.alt1} 
                                                style={{
                                                    width: '150%', 
                                                    marginLeft: '-20%',
                                                }}/>
                                        </ContainerImg>
                                        <ColImg>
                                            <ContainerImg style={{
                                                width: '180px',
                                                height: '180px'
                                            }}>
                                                <img 
                                                    src={props.img2} 
                                                    alt={props.alt2} 
                                                    style={{
                                                        width: '160%', 
                                                        marginLeft: '-30%'
                                                    }}/>
                                            </ContainerImg>
                                            <ContainerImg style={{
                                                width: '180px',
                                                height: '240px'
                                            }}>
                                                <img 
                                                    src={props.img3} 
                                                    alt={props.alt3} 
                                                    style={{
                                                        width: '150%', 
                                                        marginLeft: '-25%', 
                                                        marginTop: '-70%'
                                                    }}/>
                                            </ContainerImg>
                                        </ColImg>
                                    </RowImg>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
        </ThemeProvider>
    )
}

export default InfoSection
