// @flow
import React, { Component } from "react";

import { Svg, Path, Wrapper } from "./styled";
import { color } from "styles";

type Props = {
  color?: string,
  size?: number
};

export default class Loader extends Component<Props> {
  static defaultProps = {
    size: 24,
    color: color.BLACK
  };

  render() {
    const { color, size } = this.props;

    return (
      <Wrapper size={size}>
        <Svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <Path cx="50%" cy="50%" r="45" stroke={color} />
        </Svg>
      </Wrapper>
    );
  }
}
