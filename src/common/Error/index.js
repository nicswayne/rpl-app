// @flow
import React, { Component, type Node } from 'react';
import Fade from 'react-reveal/Fade';

import { Spacing } from 'common/Layout';

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
                    <h1>{text}</h1>
                    <Spacing />
                    <h3 weight={300}>{subtext}</h3>
                    <Spacing />
                    {children}
                </Spacing>
            </Fade>
        );
    }
}
