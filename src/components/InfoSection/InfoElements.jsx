import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 80px 0;
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
    left: 0;
    margin-left: -120px;
    margin-bottom: -220px;
    z-index: 2;
    opacity: 0.6;

    @media screen and (max-width: 768px) {
        margin-right: -120px;
    }
`;

export const InfoWrapper = styled.div`
    position: relative;
    display: grid;
    z-index: 3;
    min-height: 700px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText, theme}) => (lightText ? '#f7f8fa' : theme.primary)};
    position: relative;
    padding-bottom: 20px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 30%;
        border-bottom: 4px solid ${({lightText, theme}) => (lightText ? '#f7f8fa' : theme.primary)};
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${({darkText, theme}) => (darkText ? theme.darkText : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const RowImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const ColImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContainerImg = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;