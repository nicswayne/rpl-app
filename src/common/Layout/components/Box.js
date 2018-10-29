// @flow
import styled, { css } from 'styled-components';

type Props = {
    max: number,
    percent: number,
    width: number,
};

export const Box = styled.div`
  ${(props: Props) => console.log(props)}
    flex: ${(props: Props) => `${props.percent}%` || 1};

    ${(props: Props) =>
        props.width &&
        css`
            width: ${props.width / 100}%;
        `};
    ${(props: Props) =>
        props.max &&
        css`
            max-width: ${props.max}px;
        `};
`;
