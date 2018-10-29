import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { color } from '../../styles';
import { font } from 'styles/constants';

export const NavItem = styled(NavLink)`
    background-color: ${color.GREY_60}
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
    justify-content: ${props => props.justify}
};

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
        background: ${color.GREY_80};

        &:after {
            background: ${color.WHITE};
        }
    }

    &.selected {
        background-color: ${color.GREY_80};

        &:before {
            transform-origin: left;
            transform: scaleX(1);
        }
    }

    ${
        props =>
            props.collapsed === 'true' &&
            css`
                padding: 20px 50px;
            ` /* Sorry */
    };
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
