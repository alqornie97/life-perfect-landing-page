import styled from 'styled-components';

export const ClientsContainer = styled.div`
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
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 70px 24px;
    align-items: center;
    flex-direction: column;
    min-height: 630px;
`;

export const ServiceTitle = styled.h1`
    color: #fff;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 5px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 40%;
        border-bottom: 4px solid #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;

export const ServiceDesc = styled.p`
    text-align: center;
    color: #fff;
    max-width: 500px;
    font-size: 16px;
    margin-top: 7px;
    margin-bottom: 30px;
`;

export const CardWrapper = styled.p`
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    align-items: center;
    align-content: center;
    flex: 1;
`;

export const ClientLogo = styled.img`
    max-height: 70px;
    max-width: 200px;
    /* filter: brightness(0) invert(1); */
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.2);
        transition: all 0.2 ease-in-out;
        cursor: pointer; 
    }
`;