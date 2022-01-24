import React, {useContext} from 'react'
import { Button } from '../ButtonElement';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    ArticlesContainer,
    TextureBg,
    ImageBg,
    ContentWrapper,
    Title,
    Desc,
    CardWrapper,
    Card,
    Img,
    CardImage,
    CardText,
    CardTitle,
    CardP,
    CardAction,
    Action,
    ActionIcon
} from './ArticlesElements';
import ringBg from '../../images/ring_bg.png';
import {AiOutlineLike} from 'react-icons/ai';
import {BiComment} from 'react-icons/bi';
import {FiShare2} from 'react-icons/fi';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import image10 from '../../images/image10.jpg';

const Articles = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <ArticlesContainer id='articles'>
                <TextureBg>
                    <ImageBg src={ringBg}/>
                </TextureBg>
                <ContentWrapper>
                    <Title>Read More Articles</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</Desc>
                    <CardWrapper>
                        <Card>
                            <CardImage>
                                <Img src={image8}/>
                            </CardImage>
                            <CardText>
                                <CardTitle>Lorem Ipsum Dolor Sit</CardTitle>
                                <CardP>Lorem ipsum dolor sit amet onsectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</CardP>
                                <CardAction>
                                    <Action><ActionIcon><AiOutlineLike/></ActionIcon> 33K</Action>
                                    <Action><ActionIcon><FiShare2/></ActionIcon> 7K</Action>
                                    <Action><ActionIcon><BiComment/></ActionIcon> 5K</Action>
                                </CardAction>
                            </CardText>
                        </Card>
                        <Card>
                            <CardImage>
                                <Img src={image9}/>
                            </CardImage>
                            <CardText>
                                <CardTitle>Lorem Ipsum Dolor Sit</CardTitle>
                                <CardP>Lorem ipsum dolor sit amet onsectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</CardP>
                                <CardAction>
                                    <Action><ActionIcon><AiOutlineLike/></ActionIcon> 33K</Action>
                                    <Action><ActionIcon><FiShare2/></ActionIcon> 7K</Action>
                                    <Action><ActionIcon><BiComment/></ActionIcon> 5K</Action>
                                </CardAction>
                            </CardText>
                        </Card>
                        <Card>
                            <CardImage>
                                <Img src={image10}/>
                            </CardImage>
                            <CardText>
                                <CardTitle>Lorem Ipsum Dolor Sit</CardTitle>
                                <CardP>Lorem ipsum dolor sit amet onsectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</CardP>
                                <CardAction>
                                    <Action><ActionIcon><AiOutlineLike/></ActionIcon> 33K</Action>
                                    <Action><ActionIcon><FiShare2/></ActionIcon> 7K</Action>
                                    <Action><ActionIcon><BiComment/></ActionIcon> 5K</Action>
                                </CardAction>
                            </CardText>
                        </Card>
                    </CardWrapper>
                </ContentWrapper>
            </ArticlesContainer>
        </ThemeProvider>
    )
}

export default Articles
