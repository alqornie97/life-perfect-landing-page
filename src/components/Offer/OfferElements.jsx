import styled from 'styled-components';

export const OfferContainer = styled.div`
    color: #fff;
    background: ${({theme}) => theme.primary};
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 30px 0;
    }
`;

export const TextureBg = styled.div`
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
    height: 680px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: -120px;
    margin-bottom: -220px;
    z-index: 2;

    @media screen and (max-width: 768px) {
        margin-right: -120px;
    }
`;

export const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    z-index: 3;
    width: 100%;
    max-width: 900px;
    padding: 70px 24px;
    align-items: center;
    flex-direction: row;
    min-height: 300px;
    margin-left: auto;
    margin-right: auto;
`;

export const OfferText = styled.div`
    flex: 1;
`;

export const OfferButton = styled.div`
    /* flex: 1; */
`;

export const OfferTitle = styled.h1`
    color: #fff;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 5px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 15%;
        border-bottom: 4px solid #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;

export const OfferDesc = styled.p`
    color: #fff;
    max-width: 400px;
    font-size: 16px;
    line-height: 1.3;
    margin-top: 12px;
    margin-bottom: 30px;
`;