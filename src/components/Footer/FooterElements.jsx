import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #16475A;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 120px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: ${({theme}) => theme.btnPrimaryNormal};
        transition: 0.3s ease-out;
    }
`;

export const CompanyInfo = styled.section`
    max-width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    
    @media screen and (max-width: 1000px) {
        max-width: 500px;
        align-items: center;
    }
`;

export const CompanyLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const CompanyDesc = styled.p`
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 20px;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 24px;
    width: 240px;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

export const ImgLogo = styled.img`
    width: 50px;
    margin-right: 10px;
`;