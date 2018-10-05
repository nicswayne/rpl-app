// @flow
import React, { Component, type Node } from "react";
import styled from "styled-components";

import { color, media } from "styles";

type Props = {
  children?: Node,
  padding?: string
};

const Wrapper = styled.div`
  height: 100%;
  padding-bottom: 6px;
`;

const Inner = styled.div`
  background: ${color.WHITE};
  height: 100%;
  padding: ${props => props.padding || "60px"};

  ${media.PHONE`
    padding: 40px 20px;
  `};
`;

export default class Card extends Component<Props> {
  render() {
    const { children, padding } = this.props;

    return (
      <Wrapper>
        <Inner padding={padding} >{children}</Inner>
      </Wrapper>
    );
  }
}
