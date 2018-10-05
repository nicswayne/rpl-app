// @flow
import styled, { css } from "styled-components";

import { media } from "styles";

type Props = {
  width: number,
  isFullWidth?: boolean,
  isGutterless: boolean,
  padding?: string
};

const width = (props: Props) => {
  return props.isFullWidth ?
    css`
      max-width: 100%;
    `
    : css`
      max-width: ${props.width || 1440}px;
    `;
}

const isGutterless = (props: Props) =>
  props.isGutterless &&
  css`
    padding: 0;
  `;

const padding = (props: Props) =>
  props.padding ?
  css`
    padding:${props.padding};
  `
  : css`
    padding: 0 4%;
  ` ;

export const Container = styled.div`
  flex: 1;
  box-sizing: content-box;
  margin: 0 auto;
  ${width}
  ${isGutterless}
  ${padding}

  ${media.PHONE`
    padding: 0 15px;
  `}
`;
