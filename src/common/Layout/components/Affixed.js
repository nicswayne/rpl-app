// @flow
import React, { Component, Fragment, type Node } from 'react';
import styled, { css } from 'styled-components';

type Props = {
    children: Node,
    position: 'top' | 'bottom',
    hasShadowOnScroll: boolean,
};

type State = {
    height: number,
    scrolledFromTop: boolean,
};

const Sticky = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 300;
    box-shadow: 0 3px 9px -2px rgba(52, 61, 66, 0);
    transition: 0.3s ease box-shadow;

    ${props =>
        props.position &&
        css`
            ${props.position}: 0;
        `} ${props =>
        props.scrolledFromTop &&
        css`
            box-shadow: 0 3px 9px -2px rgba(52, 61, 66, 0.2);
        `};
`;

const Placeholder = styled.div`
    position: relative;

    ${props =>
        props.height &&
        css`
            height: ${props.height}px;
        `};
`;

export class Affixed extends Component<Props, State> {
    stickyElement: ?HTMLDivElement;
    handleScroll: () => {};

    constructor(props: Props) {
        super(props);

        this.state = {
            height: 0,
            scrolledFromTop: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        if (this.stickyElement) {
            const height = this.stickyElement.offsetHeight;
            this.setState({ height: height });
        }

        if (this.props.hasShadowOnScroll) {
            window.addEventListener('scroll', this.handleScroll);
        }

        if (this.props.hasShadowOnScroll && window.scrollY > 20) {
            this.setState({ scrolledFromTop: true });
        }
    }

    componentWillUnmount() {
        if (this.props.hasShadowOnScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll(event: Event) {
        if (window.scrollY > 20 && !this.state.scrolledFromTop) {
            this.setState({ scrolledFromTop: true });
        }

        if (window.scrollY < 20 && this.state.scrolledFromTop) {
            this.setState({ scrolledFromTop: false });
        }
    }

    render() {
        const { children, position } = this.props;

        const { scrolledFromTop } = this.state;

        return (
            <Fragment>
                <Sticky position={position} scrolledFromTop={scrolledFromTop}>
                    <div ref={div => (this.stickyElement = div)}>
                        {children}
                    </div>
                </Sticky>
                <Placeholder height={this.state.height} />
            </Fragment>
        );
    }
}
