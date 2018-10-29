// @flow
import React, { Component, type Node } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavItem, NavName } from './styled';

type State = {};

type Props = {
    isCollapsed: boolean,
    justifyContent?: string,
    name: string,
    link: string,
    icon?: Node,
};

class SideNav extends Component<Props, State> {
    render() {
        const { justifyContent, link, icon, isCollapsed, name } = this.props;
        return (
            <NavItem
                to={link}
                activeClassName="selected"
                collapsed={
                    //$FlowFixMe
                    `${isCollapsed}` /* This is being done because of a warning issue with styled components and the router NavLink */
                }
                justify={justifyContent}
            >
                <div style={{ fontSize: '0' }}>{icon}</div>
                <CSSTransition
                    in={!isCollapsed}
                    timeout={200}
                    classNames="navname"
                    unmountOnExit
                >
                    <NavName>{name}</NavName>
                </CSSTransition>
            </NavItem>
        );
    }
}

export default SideNav;
