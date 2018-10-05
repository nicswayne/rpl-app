// @flow
import React, { Component, type Node } from 'react';
import Fade from 'react-reveal/Fade';

import { Spacing } from 'common/Layout';
import Text from 'common/Text';

type Props = {
    text: string | Node,
    subtext?: string,
    children: Node,
};

export default class Error extends Component<Props> {
    render() {
        const { text, subtext, children } = this.props;

        return (
            <Fade>
                <Spacing margin="110px 0 0 110px">
                    <Text type="h1">{text}</Text>
                    <Spacing />
                    <Text type="h3" weight={300}>
                        {subtext}
                    </Text>
                    <Spacing />
                    {children}
                </Spacing>
            </Fade>
        );
    }
}
