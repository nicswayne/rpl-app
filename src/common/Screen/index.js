import React, { Component, type Node } from 'react';
import Fade from 'react-reveal/Fade';

import { ScreenWrapper, ScreenContent, ScreenScrollContent } from './styled';
import { Container } from 'common/Layout';

type Props = {
    children: Node,
    contentWidth?: number,
    background?: string,
    isFullWidth?: boolean,
    padding?: string,
};

type State = {
    scrolledFromTop: boolean,
};

export default class Screen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scrolledFromTop: false,
        };
    }

    handleScroll = (event: SyntheticEvent<HTMLDivElement>) => {
        if (event.currentTarget.scrollTop > 20 && !this.state.scrolledFromTop) {
            this.setState({ scrolledFromTop: true });
        }

        if (event.currentTarget.scrollTop < 20 && this.state.scrolledFromTop) {
            this.setState({ scrolledFromTop: false });
        }
    };

    render() {
        const {
            background,
            children,
            contentWidth,
            isFullWidth,
            padding,
        } = this.props;
        const { scrolledFromTop } = this.state;

        return (
            <ScreenWrapper>
                <ScreenContent
                    onScroll={this.handleScroll}
                    scrolledFromTop={scrolledFromTop}
                    background={background}
                >
                    <ScreenScrollContent>
                        <Fade bottom distance="4px" delay={200}>
                            <Container
                                width={contentWidth ? contentWidth : 1400}
                                isFullWidth={isFullWidth}
                                padding={padding}
                            >
                                {children}
                            </Container>
                        </Fade>
                    </ScreenScrollContent>
                </ScreenContent>
            </ScreenWrapper>
        );
    }
}
