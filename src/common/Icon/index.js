// TODO: Get working with flow
// Currently not using flow as it errors on DOMParser attributes and methods
// such as innerHTML and getAttribute(). This component should still be
// written with type checks on props for future reimplementation.
import React, { Component } from "react";

import { color } from "styles";

type Props = {
  src: string,
  size?: number,
  color?: string
};

function parseSVGFromSource(source) {
  const doc = new DOMParser().parseFromString(source, "image/svg+xml");
  const svg = doc.firstChild;
  return svg;
}

export default class Icon extends Component<Props> {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.src !== prevState.curSource) {
      return {
        curSource: nextProps.src,
        svg: parseSVGFromSource(nextProps.src)
      };
    }

    return null;
  }

  static defaultProps = {
    size: 32,
    color: color.BLACK
  };

  state = {
    curSource: "",
    svg: null
  };

  render() {
    return (
      <svg
        viewBox={this.state.svg.getAttribute("viewBox")}
        height={this.props.size}
        width={this.props.size}
        color={this.props.color}
        dangerouslySetInnerHTML={{ __html: this.state.svg.innerHTML }}
      />
    );
  }
}
