import styled, { css } from 'styled-components';

import { color } from 'styles';

export const ScreenWrapper = styled.div`
    position: relative;
    height: 100%;
    flex: 1;

    &.screen-enter-active,
    &.screen-enter-done,
    &.screen-enter,
    &.screen-exit-active,
    &.screen-exit-done,
    &.screen-exit {
        -webkit-backface-visibility: hidden;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.screen-enter-active,
    &.screen-enter-done {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
    }

    &.screen-enter {
        transform: translateX(10px);
        opacity: 0;
        visibility: hidden;
    }

    &.screen-exit {
        opacity: 1;
        transform: translateX(0);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    &.screen-exit-active {
        transform: translateX(-10px);
        opacity: 0;
    }
`;

export const ScreenHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: ${color.WHITE};
    z-index: 10;
    -webkit-backface-visibility: hidden;
    transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) transform;
    transform-origin: top;

    > div {
        padding: 30px 0;
        -webkit-backface-visibility: hidden;
        transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) padding;
    }

    h1,
    a {
        -webkit-backface-visibility: hidden;
        transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) transform;
        transform-origin: top left;
    }

    ${props =>
        props.scrolledFromTop &&
        css`
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
            transform: scaleY(0.5);

            > div {
                padding: 30px 0 32px 0;
            }

            h1 {
                transform: scaleX(0.5) scaleY(1);
            }

            a {
                transform: scaleX(1) scaleY(1.5);
            }
        `};
`;

export const TitleRight = styled.div`
    -webkit-backface-visibility: hidden;
    transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) transform;
    transform-origin: top right;

    ${props =>
        props.scrolledFromTop &&
        css`
            transform: scaleX(1) scaleY(2) translateY(-20%);
        `};
`;

export const ScreenHeaderContent = styled.div`
    opacity: 1;
    height: auto;
    transform-origin: top left;
    -webkit-backface-visibility: hidden;
    transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) all;

    ${props =>
        props.scrolledFromTop &&
        css`
            height: 0;
            opacity: 0;
            transform: scaleX(0);
        `};
`;

export const ScreenContent = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    overflow-y: scroll;

    ${props =>
        props.headerHeight &&
        css`
            padding-top: ${props.headerHeight}px;
        `} ${props =>
        props.background &&
        css`
            background: ${props.background};
        `};
`;

export const ScreenScrollContent = styled.div`
    position: relative;
    padding-bottom: 80px;
    padding-top: 20px;
`;
