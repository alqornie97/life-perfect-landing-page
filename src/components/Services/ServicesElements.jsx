import styled from 'styled-components';

export const ServiceContainer = styled.div`
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
    min-height: 550px;
`;

export const ServiceTitle = styled.h1`
    color: #fff;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    padding-bottom: 12px;
    position: relative;

    :before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 40%;
        left: 30%;
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
    font-size: 15px;
    line-height: 1.5;
    margin-top: 7px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    position: relative;

`;

export const CardWrapper = styled.p`
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    align-items: center;
    align-content: center;
    flex: 1;
`;

export const Card = styled.div`
    width: 320px;
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export const CardIcon = styled.i`
    color: #fff;
    width: 70px;
    height: 70px;
    font-size: 45px;
    text-align: center;
    border:3px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardText = styled.div`
    flex: 1;
`;

export const CardTitle = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #fff;
`;

export const CardDesc = styled.div`
    font-size: 14px;
    line-height: 1.3;
    color: #fff;
    position: relative;
    padding-bottom: 16px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 30%;
        /* left: 35%; */
        border-bottom: 3px solid #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;
