// @flow
import styled, { css } from 'styled-components';

import { color } from 'styles';

const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    border: none;
    outline: none;
    padding: 0 32px;
    height: 52px;
    line-height: 52px;
    width: auto;
    max-width: 100%;
    min-width: 135px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    transition: 0.2s ease background-color, 0.2s ease color,
        0.2s ease border-color;

    &[disabled] {
        cursor: not-allowed;
    }
`;

const appearance = props => css`
  ${props.appearance === 'primary' &&
      `
    background-color: ${color.GREY_60};
    color: #fff;

    &:hover {
      background-color: ${color.GREY_80};
    }
  `}
  ${props.appearance === 'primary' &&
      !props.isLoading &&
      `
    &[disabled] {
      background-color: ${color.GREY_10};
      color: ${color.GREY_60};
    }
  `}

  ${props.appearance === 'secondary' &&
      `
    background-color: transparent;
    color: ${color.GREY_80};
    border: 1px solid ${color.GREY_20};

    &:hover {
      border-color: ${color.GREY_60};
      color: ${color.BLACK};
    }

    &[disabled] {
      border-color: ${color.GREY_20};
      color: ${color.GREY_20};
    }
  `}
  ${props.appearance === 'secondary' &&
      !props.isLoading &&
      `
    &[disabled] {
      border-color: ${color.GREY_20};
      color: ${color.GREY_20};
    }
  `}

  ${props.appearance === 'link' &&
      `
    color: ${color.GREY_60};
    padding: 0;
    height: initial;
    line-height: 1.8;
    background: transparent;
    min-width: 0;

    svg {
      transform: translateX(-2px);
      transition: 0.2s ease transform;
    }

    &:hover {
      color: ${color.GREY_80};

      svg {
        transform: translateX(1px);
        color: ${color.GREY_80};
      }
    }
  `}
`;

const isLoading = props =>
    props.isLoading &&
    css`
        color: transparent;
    `;

const shouldFitContainer = props =>
    props.shouldFitContainer &&
    css`
        display: flex;
        width: 100%;
    `;

export const ButtonText = styled.span`
    opacity: 1;
    transition: 0.2s ease opacity;

    ${props =>
        props.isLoading &&
        css`
            opacity: 0;
        `};
`;

export const LoaderPosition = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button`
  ${base}
  ${appearance}
  ${shouldFitContainer}
`;

export const StyledLink = styled.a`
  text-decoration: none;

  ${base}
  ${isLoading}
  ${appearance}
  ${shouldFitContainer}

  &:after {
    display: none;
  }
`;
