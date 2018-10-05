// @flow
import styled, { css } from "styled-components";

type Props = {
  height: number,
  padding: string,
  margin: string,
  inline: boolean
};

const padding = (props: Props) =>
  props.padding &&
  css`
    padding: ${props.padding};
  `;

const margin = (props: Props) =>
  props.margin &&
  css`
    padding: ${props.margin};
  `;

const height = (props: Props) =>
  props.height
    ? css`
        height: ${props.height}px;
      `
    : !props.height &&
      !props.margin &&
      !props.padding &&
      css`
        height: 20px;
      `;

const inline = (props: Props) =>
  props.inline &&
  css`
    display: inline-flex;
  `;

export const Spacing = styled.div`
  ${padding}
  ${margin}
  ${height}
  ${inline}
`;
