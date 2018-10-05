// @flow
import React, { Component, type Node } from "react";

import { color } from "styles";
import { StyledButton, StyledLink, ButtonText, LoaderPosition } from "./styled";
import Loader from "common/Loader";

type Props = {
  children?: Node,
  appearance?: "primary" | "secondary" | "link",
  isLink?: boolean,
  isDisabled?: boolean,
  shouldFitContainer?: boolean,
  isLoading?: boolean
};

export default class Button extends Component<Props> {
  static defaultProps = {
    appearance: "primary"
  };

  getLoaderColor() {
    switch (this.props.appearance) {
      case "primary":
        return color.WHITE;
      default:
        return color.BLACK;
    }
  }

  render() {
    const props = this.props;

    if (props.isLink) {
      return (
        <StyledLink {...props}>
          <ButtonText isLoading={props.isLoading}>{props.children}</ButtonText>
          {props.isLoading && (
            <LoaderPosition>
              <Loader color={this.getLoaderColor()} size={20} />
            </LoaderPosition>
          )}
        </StyledLink>
      );
    }

    return (
      <StyledButton {...props} disabled={props.isDisabled || props.isLoading}>
        <ButtonText isLoading={props.isLoading}>{props.children}</ButtonText>
        {props.isLoading && (
          <LoaderPosition>
            <Loader color={this.getLoaderColor()} size={20} />
          </LoaderPosition>
        )}
      </StyledButton>
    );
  }
}
