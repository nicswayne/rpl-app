// @flow
import styled, { css } from 'styled-components';

import { media } from 'styles';
import { type ScreenSize } from '../types';

type Props = {
    alignMiddle?: boolean | ScreenSize,
    alignTop?: boolean | ScreenSize,
    alignBottom?: boolean | ScreenSize,
    alignStretch?: boolean | ScreenSize,
    spaceBetween?: boolean | ScreenSize,
    spaceAround?: boolean | ScreenSize,
    justifyStart?: boolean | ScreenSize,
    justifyCenter?: boolean | ScreenSize,
    justifyEnd?: boolean | ScreenSize,
    directionColumnReverse?: boolean | ScreenSize,
    directionRowReverse?: boolean | ScreenSize,
    gutter?: number,
};

const responsiveCss = (prop: boolean | ScreenSize) => {
    if (prop && typeof prop === 'string') {
        return media[prop.toUpperCase()];
    }

    if (prop) {
        return (...args) => css(...args);
    }

    return (...args) => {};
};

const alignMiddle = (props: Props) => responsiveCss(props.alignMiddle)`
  align-items: center;
`;

const alignTop = (props: Props) => responsiveCss(props.alignTop)`
  align-items: flex-start;
`;

const alignBottom = (props: Props) => responsiveCss(props.alignBottom)`
  align-items: flex-end;
`;

const alignStretch = (props: Props) => responsiveCss(props.alignBottom)`
  align-items: stretch;
`;

const spaceBetween = (props: Props) => responsiveCss(props.spaceBetween)`
  justify-content: space-between;
`;

const spaceAround = (props: Props) => responsiveCss(props.spaceAround)`
  justify-content: space-around;
`;

const justifyStart = (props: Props) => responsiveCss(props.justifyStart)`
  justify-content: flex-start;
`;

const justifyCenter = (props: Props) => responsiveCss(props.justifyCenter)`
  justify-content: center;
`;

const justifyEnd = (props: Props) => responsiveCss(props.justifyEnd)`
  justify-content: flex-end;
`;

const directionColumnReverse = (props: Props) => responsiveCss(
    props.directionColumnReverse
)`
  flex-direction: column-reverse;
`;

const directionRowReverse = (props: Props) => responsiveCss(
    props.directionRowReverse
)`
  flex-direction: row-reverse;
`;

const gutter = (props: Props) =>
    props.gutter
        ? css`
              margin-right: -${props.gutter}px;
              margin-left: -${props.gutter}px;
          `
        : css`
              margin-right: -15px;
              margin-left: -15px;
          `;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 1 auto;

  ${gutter}
  ${alignMiddle}
  ${alignTop}
  ${alignBottom}
  ${alignStretch}
  ${spaceBetween}
  ${spaceAround}
  ${justifyStart}
  ${justifyCenter}
  ${justifyEnd}
  ${directionColumnReverse}
  ${directionRowReverse}
`;
