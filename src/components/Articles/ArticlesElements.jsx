import styled from 'styled-components';

export const ArticlesContainer = styled.div`
    background: #fff;
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
    left: 0;
    margin-left: -120px;
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

export const Title = styled.h1`
    color: ${({theme}) => theme.primary};
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    position: relative;
    padding-bottom: 12px;

    :before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 30%;
        left: 35%;
        border-bottom: 4px solid ${({theme}) => theme.primary};
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;

export const Desc = styled.p`
    text-align: center;
    color: ${({theme}) => theme.darkText};
    max-width: 500px;
    font-size: 15px;
    line-height: 1.5;
    margin-top: 7px;
    margin-bottom: 30px;
`;

export const CardWrapper = styled.p`
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    align-items: center;
    align-content: center;
    flex: 1;
`;

export const Card = styled.div`
    background: #fff;
    width: 300px;
    height: 400px;
    border-radius: 10%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        color: ${({theme}) => theme.primary};
        transform: scale(1.05);
        transition: all 0.2 ease-in-out;
        cursor: pointer; 
    }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 200px;
    background: #aaa;
    overflow: hidden;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const CardText = styled.div`
    flex: 1;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
    color: ${({theme}) => theme.darkText};
`;

export const CardP = styled.p`
    margin-top: 7px;
    color: ${({theme}) => theme.darkText};
    font-size: 14px;
    line-height: 1.4;
    flex: 1;
`;

export const CardAction = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 10px;

    :before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        border-bottom: 1.5px solid #767676;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;

export const Action = styled.div`
    color: #767676;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;

    :hover {
        cursor: pointer;
        color: ${({theme}) => theme.primary};
        /* font-weight: 900; */
    }
`;

export const ActionIcon = styled.div`
    font-size: 16px;
    margin-right: 7px;
`;