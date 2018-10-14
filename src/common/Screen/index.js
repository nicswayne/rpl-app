import React, { Component, createRef, type Node } from 'react';
import Fade from 'react-reveal/Fade';

import {
    ScreenWrapper,
    ScreenHeader,
    ScreenContent,
    ScreenScrollContent,
    ScreenHeaderContent,
    TitleRight,
} from './styled';
import { Container, Spacing, Flex } from 'common/Layout';

type Props = {
    children: Node,
    title?: string,
    headerContent?: Node,
    contentWidth?: number,
    headerRight?: Node,
    background?: string,
    backButton?: Node,
    isFullWidth?: boolean,
    padding?: string,
};

type State = {
    scrolledFromTop: boolean,
    headerHeight: number,
};

export default class Screen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scrolledFromTop: false,
            headerHeight: 0,
        };
        this.headerRef = createRef();
    }

    updateHeaderHeight = () => {
        if (
            this.headerRef &&
            this.headerRef.current &&
            this.headerRef.current.clientHeight
        ) {
            this.setState({
                headerHeight: this.headerRef.current.clientHeight,
            });
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onEscapeKey, false);
        this.updateHeaderHeight();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onEscapeKey, false);
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
            backButton,
            children,
            title,
            headerContent,
            contentWidth,
            headerRight,
            isFullWidth,
            padding,
        } = this.props;
        const { headerHeight, scrolledFromTop } = this.state;

        return (
            <ScreenWrapper>
                {/* <ScreenHeader scrolledFromTop={scrolledFromTop}>
                    <div ref={this.headerRef}>
                        <Fade duration={200}>
                            <Container
                                isFullWidth={isFullWidth}
                                padding={padding}
                                width={contentWidth ? contentWidth : 1400}
                            >
                                <Flex justify="space-between" align="center">
                                    {title && <h1>{title}</h1>}
                                    {headerRight && (
                                        <TitleRight
                                            scrolledFromTop={scrolledFromTop}
                                        >
                                            {headerRight}
                                        </TitleRight>
                                    )}
                                </Flex>
                                {backButton && (
                                    <div>
                                        <Spacing height={10} />
                                        <Flex align="flex-start">
                                            {backButton}
                                        </Flex>
                                    </div>
                                )}
                                {headerContent && (
                                    <ScreenHeaderContent
                                        scrolledFromTop={scrolledFromTop}
                                    >
                                        <Spacing height={30} />
                                        {headerContent}
                                    </ScreenHeaderContent>
                                )}
                            </Container>
                        </Fade>
                    </div>
                </ScreenHeader> */}
                <ScreenContent
                    onScroll={this.handleScroll}
                    headerHeight={headerHeight}
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
