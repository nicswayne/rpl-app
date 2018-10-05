// @flow
import styled from 'styled-components';

export const InlineGroup = styled.div`
    > * {
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }
    }
`;
