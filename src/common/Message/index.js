// @flow
import React, { Component } from "react";

import { color } from "styles";

import Icon from "common/Icon";
import { Flex, Spacing } from "common/Layout";
import Text from "common/Text";

type Props = {
  text: string,
  subtext?: string,
  iconSrc?: string
};

export default class Message extends Component<Props> {
  render() {
    const {
      text,
      subtext,
      iconSrc,
    } = this.props;

    return (
      <div>
          <Flex direction="row" align="center">
              {iconSrc && (
                <Spacing margin="0 20px 0 0">
                    <Icon src={iconSrc} size={45} color={color.BLACK} />
                </Spacing>
              )}
              <Text type="h3" weight={500}>{text}</Text>
          </Flex>
          <Flex direction="row">
              {subtext && (
                <Spacing margin="11px 0 0 65px">
                  <Text type="small">{subtext}</Text>
                </Spacing>
              )}
          </Flex>
      </div>
    );
  }
}
