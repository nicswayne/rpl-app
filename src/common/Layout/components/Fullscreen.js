// @flow
import styled, { css } from 'styled-components';

type Props = {
    centerCenter?: boolean,
};

export const Fullscreen = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${(props: Props) =>
        props.centerCenter &&
        css`
            align-items: center;
            justify-content: center;
        `};
`;
