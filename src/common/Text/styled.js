import styled, { css } from 'styled-components';

import { media } from 'styles';

const color = props =>
    props.color &&
    `
  color: ${props.color};
`;

const align = props =>
    props.align &&
    `
  text-align: ${props.align};
`;

const weight = props =>
    props.weight &&
    `
  font-weight: ${props.weight};
`;

const size = props =>
    props.size &&
    `
  font-size: ${props.size};
`;

const phoneSize = props =>
    props.phoneSize &&
    `
  font-size: ${props.phoneSize};
`;

// const family = props =>
//   props.family &&
//   `
//   font-family: ${
//     props.family === "default" ? font.TYPE : font.TYPE_EXTENDED
//   };
// `;

const verticalSpacing = props =>
    !props.hasVerticalSpacing &&
    `
  margin: 0;
`;

const styles = css`
  ${color}
  ${align}
  ${weight}
  ${size}
  ${verticalSpacing}
  ${'' /* ${family} */}

  ${media.PHONE`
    ${phoneSize}
  `}

  a {
    cursor: pointer;
  }
`;

export const H1 = styled.h1`
    ${styles};
`;
export const H2 = styled.h2`
    ${styles};
`;
export const H3 = styled.h3`
    ${styles};
`;
export const H4 = styled.h4`
    ${styles};
`;
export const H5 = styled.h5`
    ${styles};
`;
export const H6 = styled.h6`
    ${styles};
`;
export const P = styled.p`
    ${styles};
`;
export const Span = styled.span`
    ${styles};
`;
export const Small = styled.small`
    ${styles};
`;
