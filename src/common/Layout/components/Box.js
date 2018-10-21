// @flow
import styled, { css } from 'styled-components';

type Props = {
    width: number,
};

export const Box = styled.div`
    flex: 1;

    ${(props: Props) =>
        props.width &&
        css`
            width: ${props.width / 100}%;
        `};
`;
