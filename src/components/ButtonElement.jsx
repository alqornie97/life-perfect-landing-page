import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary, theme}) => (primary ? theme.btnPrimaryNormal : theme.btnSecondaryNormal)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({primary, theme}) => (primary ? theme.btnPrimaryText : theme.btnSecondaryText)};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    /* font-weight: bold; */
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary, theme}) => (primary ? theme.btnPrimaryHover : theme.btnSecondaryHover)};
    }
`;