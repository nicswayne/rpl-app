// @flow

import React, { Component, type Node, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
    Aside,
    NavItem,
    CollapseBar,
    NavName,
    CollapseBarWrapper,
} from './styled';

import { Spacing } from 'common/Layout';
import Icon from 'common/Icon';

import backIcon from 'styles/icons/back.svg';
import calendarIcon from 'styles/icons/calendar.svg';
import contactsIcon from 'styles/icons/contacts.svg';
import homeIcon from 'styles/icons/home.svg';
import { color } from 'styles';

type Props = {};

type State = {
    isCollapsed: boolean,
};

type Item = {
    name: string,
    link: string,
    icon: Node,
};

const links = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        icon: <Icon src={homeIcon} color={color.WHITE} size={38} />,
    },
    {
        name: 'Schedule',
        link: '/scehdule',
        icon: <Icon src={calendarIcon} color={color.WHITE} size={38} />,
    },
    {
        name: 'Crew Contacts',
        link: '/crew',
        icon: <Icon src={contactsIcon} color={color.WHITE} size={38} />,
    },
];

export function ListItem({
    item,
    isCollapsed,
}: {
    item: Item,
    isCollapsed: boolean,
}) {
    const { link, name, icon } = item;
    return (
        //$FlowFixMe
        <NavItem
            to={link}
            activeClassName="selected"
            collapsed={
                `${isCollapsed}` /* This is being done because of a warning issue with styled components and the router NavLink */
            }
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

class SideNav extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isCollapsed: false,
        };
    }

    toggleCollapse = () => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed,
        }));
    };

    render() {
        const { isCollapsed } = this.state;

        return (
            <Aside isCollapsed={isCollapsed}>
                <div>
                    {links.map((l: Item, idx) => (
                        <ListItem
                            key={idx}
                            item={l}
                            isCollapsed={isCollapsed}
                        />
                    ))}
                </div>
                <CollapseBarWrapper>
                    <CollapseBar
                        onClick={this.toggleCollapse}
                        isCollapsed={isCollapsed}
                    >
                        <Icon src={backIcon} color={color.WHITE} size={52} />
                    </CollapseBar>
                </CollapseBarWrapper>
            </Aside>
        );
    }
}

export default withRouter(SideNav);
