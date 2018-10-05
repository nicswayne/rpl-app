import { injectGlobal } from 'styled-components';

import { font, fontSize, color, media } from './constants';

export default injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${font.TYPE};
    font-size: ${fontSize.BASE};
    font-weight: 200;
    line-height: 1.6;
    color: ${color.BLACK};
    height: 100%;

    ${media.LAPTOP`
      font-size: 15px;
    `}
  }

  div[id=root] {
    height: 100%;
  }

  p, ul, ol, dl, h1, h2, h3, h4, h5, h6, blockquote, pre, form, table {
    margin: 20px 0 0 0;

    &:first-child {
      margin-top: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${font.TYPE_EXTENDED};
    line-height: 1.3;
    font-weight: 700;
  }
  h1 {
    font-size: ${fontSize.H1};

    ${media.LAPTOP`
      font-size: 50px;
    `}

    ${media.TABLET`
      font-size: 46px;
    `}

    ${media.PHONE`
      font-size: 34px;
    `}
  }
  h2 {
    font-size: ${fontSize.H2};

    ${media.PHONE`
      font-size: 26px;
    `}
  }
  h3 {
    font-size: ${fontSize.H3};
  }
  h4 {
    font-size: ${fontSize.H4};

    ${media.PHONE`
      font-size: 17px;
    `}
  }
  h5 {
    font-size: ${fontSize.H5};
  }
  h6 {
    font-size: ${fontSize.H6};
  }

  a {
    position: relative;
    color: ${color.BLACK};
    text-decoration: none;
    outline: none;
    font-weight: 400;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${color.GREY_20};
      transition: 0.2s cubic-bezier(0.4,0,0.2,1) background;
    }

    &:hover:after {
      background: ${color.GREY_40};
    }
  }

  code {
    font-family: ${font.CODE};
  }

  small {
    font-size: ${fontSize.SMALL};
  }

  hr {
    border: 0;
    height: 2px;
    background-color: ${color.GREY_5};
  }
  .braintree-input {
    color: red;
    font-family: arial;
  }
  iframe:focus {
    border: 1px solid red;
  }
`;
