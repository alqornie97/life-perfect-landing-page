import React, {useState, useContext} from 'react';
import { 
    HeadlineContainer,
    HeadlineBg,
    ImageBg,
    HeadlineContent,
    HeadlineContentWrapper,
    HeadlineH1,
    HeadlineP,
    ImageContent,
    HeadlineBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeadlineElements';
import businessman from '../../images/headline_businessman.png';
import ringBg from '../../images/ring_bg.png';
import {ThemeContext} from '../../Context/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { Button } from './../ButtonElement';

const Headline = () => {
    const [hover, setHover] = useState(false);
    const theme = useContext(ThemeContext);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <ThemeProvider theme={theme}>
            <HeadlineContainer id='home'>
                <HeadlineBg>
                    <ImageBg src={ringBg}/>
                </HeadlineBg>
                <HeadlineBg>
                    <ImageContent src={businessman}/>
                </HeadlineBg>
                <HeadlineContent>
                    <HeadlineContentWrapper>
                        <HeadlineH1>Lorem ipsum dolor sit amet, consectetur elit.</HeadlineH1>
                        <HeadlineP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec pharetra felis nec erat lobortis auctor. 
                            Aliquam ligula tortor, fringilla id fringilla id, tristique non mi.
                        </HeadlineP>
                        <HeadlineBtnWrapper>
                            <Button 
                                to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80} 
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}
                                primary='true'
                                dark='true'
                            >
                                Learn More {hover ? <ArrowForward/> : <ArrowRight/>}
                            </Button>
                        </HeadlineBtnWrapper>
                    </HeadlineContentWrapper>
                </HeadlineContent>
            </HeadlineContainer>
        </ThemeProvider>
    )
}

export default Headline
