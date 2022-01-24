import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeadlineContainer = styled.div`
    background: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */
    height: 700px;
    position: relative;
    z-index: 1;
`;

export const HeadlineBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    height: 95%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: -120px;
    z-index: 2;

    @media screen and (max-width: 768px) {
        margin-right: -120px;
    }
`;

export const ImageContent = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 140px;
    margin-bottom: -70px;
    z-index: 3;
    height: 100%;
    
    @media screen and (max-width: 1100px) {
        margin-right: 20px;
    }
    
    @media screen and (max-width: 768px) {
        filter: brightness(0.7);
        margin-right: 0;
        /* height: 90%; */
    }
`;

export const HeadlineContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
`;

export const HeadlineContentWrapper = styled.div`
    width: 60%;

    @media screen and (max-width: 600px) {
        width: 100%;
        /* background: ${({theme}) => theme.primary}; */
    }
`;

export const HeadlineH1 = styled.h1`
    color: #fff;
    font-size: 34px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

export const HeadlineP = styled.p`
    margin-top: 18px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

export const HeadlineBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
`;

export const ArrowForward = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
