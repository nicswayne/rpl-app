// @flow
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: 268.60617px;
    transform: rotate(0);
  }
  12.5% {
    stroke-dashoffset: 56.54867px;
    transform: rotate(0);
  }
  12.5001% {
    stroke-dashoffset: 56.54867px;
    transform: rotateX(180deg) rotate(72.5deg);
  }
  25% {
    stroke-dashoffset: 268.60617px;
    transform: rotateX(180deg) rotate(72.5deg);
  }
  25.0001% {
    stroke-dashoffset: 268.60617px;
    transform: rotate(270deg);
  }
  37.5% {
    stroke-dashoffset: 56.54867px;
    transform: rotate(270deg);
  }
  37.5001% {
    stroke-dashoffset: 56.54867px;
    transform: rotateX(180deg) rotate(161.5deg);
  }
  50% {
    stroke-dashoffset: 268.60617px;
    transform: rotateX(180deg) rotate(161.5deg);
  }
  50.0001% {
    stroke-dashoffset: 268.60617px;
    transform: rotate(180deg);
  }
  62.5% {
    stroke-dashoffset: 56.54867px;
    transform: rotate(180deg);
  }
  62.5001% {
    stroke-dashoffset: 56.54867px;
    transform: rotateX(180deg) rotate(251.5deg);
  }
  75% {
    stroke-dashoffset: 268.60617px;
    transform: rotateX(180deg) rotate(251.5deg);
  }
  75.0001% {
    stroke-dashoffset: 268.60617px;
    transform: rotate(90deg);
  }
  87.5% {
    stroke-dashoffset: 56.54867px;
    transform: rotate(90deg);
  }
  87.5001% {
    stroke-dashoffset: 56.54867px;
    transform: rotateX(180deg) rotate(341.5deg);
  }
  100% {
    stroke-dashoffset: 268.60617px;
    transform: rotateX(180deg) rotate(341.5deg);
  }
`;

export const Wrapper = styled.div`
    display: inline-flex;
    position: relative;

    ${props =>
        props.size &&
        css`
            height: ${props.size}px;
            width: ${props.size}px;
        `};
`;

export const Svg = styled.svg`
    animation: ${rotate} 2s linear infinite;
    position: absolute;
    transform: rotate(-90deg);
    top: 0;
    left: 0;
    transform-origin: center;
    overflow: visible;
`;

export const Path = styled.circle`
    fill: transparent;
    stroke-dasharray: 282.743px;
    stroke-width: 10%;
    animation-name: ${dash};
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-iteration-count: infinite;
    transform-origin: center;
    transition-property: stroke;
    transition: stroke-dashoffset 225ms linear;
`;
