// @flow
import React, { Component, type Node } from 'react';
import { withRouter } from 'react-router-dom';
import { Aside, CollapseBar, CollapseBarWrapper } from './styled';

import Icon from 'common/Icon';
import NavLink from 'common/NavLink';

import backIcon from 'styles/icons/back.svg';
import calendarIcon from 'styles/icons/calendar.svg';
import contactsIcon from 'styles/icons/contacts.svg';
import familyIcon from 'styles/icons/family.svg';
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
        name: 'Family',
        link: '/family',
        icon: <Icon src={familyIcon} color={color.WHITE} size={38} />,
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
        <NavLink
            link={link}
            isCollapsed={isCollapsed}
            name={name}
            icon={icon}
        />
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
