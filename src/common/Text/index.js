// @flow
import React, { Component } from "react";

import { H1, H2, H3, H4, H5, H6, P, Span, Small } from "./styled";

type Props = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "small" | "p",
  color?: string,
  align?: "left" | "center" | "right",
  weight?: number,
  size?: string,
  phoneSize?: string,
  family?: "default" | "extended",
  hasVerticalSpacing?: boolean
};

export default class Text extends Component<Props> {
  static defaultProps = {
    type: "p"
  };

  render() {
    const { type, ...propsWithoutType } = this.props;

    switch (type) {
      case "h1":
        return <H1 {...propsWithoutType} />;
      case "h2":
        return <H2 {...propsWithoutType} />;
      case "h3":
        return <H3 {...propsWithoutType} />;
      case "h4":
        return <H4 {...propsWithoutType} />;
      case "h5":
        return <H5 {...propsWithoutType} />;
      case "h6":
        return <H6 {...propsWithoutType} />;
      case "span":
        return <Span {...propsWithoutType} />;
      case "small":
        return <Small {...propsWithoutType} />;
      default:
        return <P {...propsWithoutType} />;
    }
  }
}
