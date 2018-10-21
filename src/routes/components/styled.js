import styled, { css } from 'styled-components';
import { color, fontSize } from '../../styles';
import { font } from 'styles/constants';

export const Aside = styled.aside`
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${color.GREY_60};
    color: white;
    width: 310px;
    transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    ${props =>
        props.isCollapsed &&
        css`
            width: 140px;
        `};
`;

export const StyledButton = styled.button`
    color: white;
    width: 100%;
    background-color: ${color.GREY_60};
    border: none;
    font-family: ${font.TYPE};
    font-size: ${fontSize.BASE};
    font-weight: 200;
    line-height: 1.5;
    text-decoration: none;
`;

export const CollapseBar = styled.div`
    background-color: ${color.GREY_60};
    box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.3);
    font-size: 0;
    text-align: right;
    padding: 5px 10px;
    transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
        background-color: ${color.GREY_80};
    }

    svg {
        transform: rotate(0);
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

        ${props =>
            props.isCollapsed &&
            css`
                transform: rotate(180deg);
            `};
    }
`;

export const CollapseBarWrapper = styled.div`
    padding-top: 40px;
    overflow: hidden;
`;
