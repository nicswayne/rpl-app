// @flow
import styled, { css } from "styled-components";

import { media } from "styles";
import { type Span } from "../types";

type Props = {
  span?: Span,
  phone?: Span,
  tablet?: Span,
  laptop?: Span,
  desktop?: Span,
  gutter?: number
};

const span = (props: Props) =>
  props.span &&
  css`
    flex: 0 0 auto;
    flex-basis: ${(props.span / 12) * 100}%;
    max-width: ${(props.span / 12) * 100}%;
  `;

const phone = (props: Props) =>
  props.phone &&
  media.PHONE`
  flex: 0 0 auto;
  flex-basis: ${(props.phone / 12) * 100}%;
  max-width: ${(props.phone / 12) * 100}%;
`;

const tablet = (props: Props) =>
  props.tablet &&
  media.TABLET`
  flex: 0 0 auto;
  flex-basis: ${(props.tablet / 12) * 100}%;
  max-width: ${(props.tablet / 12) * 100}%;
`;

const laptop = (props: Props) =>
  props.laptop &&
  media.LAPTOP`
  flex: 0 0 auto;
  flex-basis: ${(props.laptop / 12) * 100}%;
  max-width: ${(props.laptop / 12) * 100}%;
`;

const desktop = (props: Props) =>
  props.desktop &&
  media.DESKTOP`
  flex: 0 0 auto;
  flex-basis: ${(props.desktop / 12) * 100}%;
  max-width: ${(props.desktop / 12) * 100}%;
`;

const gutter = (props: Props) =>
  props.gutter
    ? css`
        padding-right: ${props.gutter}px;
        padding-left: ${props.gutter}px;
      `
    : css`
        padding-right: 15px;
        padding-left: 15px;
      `;

export const Col = styled.div`
  flex: 1;

  ${gutter}
  ${desktop}
  ${laptop}
  ${tablet}
  ${phone}
  ${span}
`;
