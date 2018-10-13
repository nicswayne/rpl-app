import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { color, fontSize } from '../../styles';
import { font } from 'styles/constants';

export const Aside = styled.aside`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${color.RED_40};
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
    background-color: ${color.RED_40};
    border: none;
    font-family: ${font.TYPE};
    font-size: ${fontSize.BASE};
    font-weight: 200;
    line-height: 1.5;
    text-decoration: none;
`;

export const NavItem = styled(NavLink)`
    position: relative;
    padding: 20px 26px;
    margin: 0;
    display: flex;
    align-items: center;
    font-family: ${font.TYPE_EXTENDED};
    font-size: 16px;
    font-weight: 200px;
    color: ${color.WHITE};
    transition: 0.2s ease color;
    text-decoration: none;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) all;

    div:first-child {
        margin-right: 15px;
    }

    &:after {
        background: ${color.WHITE};
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.1);
        transform: scaleX(0);
        transform-origin: left;
        opacity: 0;
        -webkit-backface-visibility: hidden;
        transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) transform,
            0.2s linear opacity;
    }

    &:hover {
        background: ${color.RED_80};

        &:after {
            background: ${color.WHITE};
        }
    }

    &.selected {
        background-color: ${color.RED_80};

        &:before {
            transform-origin: left;
            transform: scaleX(1);
        }
    }

    ${props =>
        props.collapsed === 'true' &&
        css`
            padding: 20px 50px;
        ` /* Sorry */};
`;

export const NavName = styled.div`
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;

    &.navname-enter {
        opacity: 0;
    }
    &.navname-enter-active {
        opacity: 1;
    }
    &.navname-exit {
        opacity: 1;
    }
    &.navname-exit-active {
        opacity: 0;
    }
`;

export const CollapseBar = styled.div`
    background-color: ${color.RED_40};
    box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.3);
    font-size: 0;
    text-align: right;
    padding: 5px 10px;
    transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
        background-color: ${color.RED_80};
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
