// @flow
import styled, { css } from "styled-components";

type Props = {
  inline?: boolean,
  align?: "flex-start" | "flex-end" | "center",
  justify?: "space-between" | "center",
  direction?: "row" | "column" 
};

export const Flex = styled.div`
  display: flex;

  ${(props: Props) =>
    props.inline &&
    css`
      display: inline-flex;
    `}

  ${(props: Props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}

  ${(props: Props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
  
  ${(props: Props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
`;
