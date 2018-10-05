// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { color } from 'styles';

type Props = {
    children: Node,
    exact?: boolean,
    to: string,
};

const StyledNavLink = styled(NavLink)`
  color: ${color.GREY_30}
  display: inline-flex;
  line-height: 1;
  padding-bottom: 8px;
  margin-right: 50px;
  user-select: none;
  cursor: pointer;

  &.selected {
    color: ${color.BLACK};
    &:after {
      transform: scaleX(1);
    }
  }

  &:after {
    background: ${color.BLACK};
    height: 2px;
    transform-origin: left;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) transform;
    transform: scaleX(0);
  }

  &:last-child {
    margin-right: 0;
  }
`;
export default function Link({ children, exact, to }: Props) {
    return (
        <StyledNavLink exact={exact} to={to} activeClassName="selected">
            {children}
        </StyledNavLink>
    );
}
