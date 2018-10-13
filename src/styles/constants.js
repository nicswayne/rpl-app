import { css } from 'styled-components';

export const color = {
    BLACK: '#000000',
    WHITE: '#ffffff',
    SILVER: '#b3b3b3',
    RED: '#bb0a30',
    RED_40: '#d85f6e',
    RED_60: 'd84b5a',
    RED_80: '#da4444',
    YELLOW: '#ffaa00',
    YELLOW_10: '#fbebc6',
    YELLOW_20: '#f8eaa9',
    YELLOW_40: '#fad162',
    YELLOW_60: '#ffc43a',
    WARM_SILVER: '#b6b1a9',
    GREY_5: '#f2f2f2',
    GREY_10: '#e5e5e5',
    GREY_15: '#d9d9d9',
    GREY_20: '#cccccc',
    GREY_30: '#b3b3b3',
    GREY_40: '#999999',
    GREY_45: '#979797',
    GREY_50: '#808080',
    GREY_60: '#666666',
    GREY_70: '#4c4c4c',
    GREY_80: '#333333',
    GREY_90: '#1a1a1a',
    GREEN_SUCCESS: '#009900',
};

export const font = {
    TYPE: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica',
        'Arial',
        'sans-serif',
    ].join(),
    TYPE_EXTENDED: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica',
        'Arial',
        'sans-serif',
    ].join(),
    CODE: ['Menlo', 'Consolas', 'Monaco'].join(),
};

export const fontSize = {
    BASE: '16px',
    LARGE: '20px',
    SMALL: '12px',
    H1: '56px',
    H2: '32px',
    H3: '22px',
    H4: '19px',
    H5: '16px',
    H6: '14px',
};

export const spacing = {
    XXS: '5px',
    XS: '10px',
    S: '15px',
    M: '20px',
    L: '40px',
    XL: '80px',
    XXL: '160px',
    XXXL: '200px',
};

export const screenSizes = {
    DESKTOP: 1170,
    LAPTOP: 992,
    TABLET: 800,
    PHONE: 500,
};

// iterate through the sizes and create a media template
export const media = Object.keys(screenSizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = screenSizes[label] / 16;
    accumulator[label] = (...args: []) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});
