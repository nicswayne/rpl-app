// @flow
import styled from 'styled-components';
import { Flex } from 'common/Layout';

export const Padding = styled.div`
    padding-left: 20px;
`;

export const ColorBox = styled(Flex)`
    ${props => `${props.backgroundColor}
    height: 45px;
    width: ${props.width || '165px'};
    margin-left: -20px;
    padding-left: 20px;
    border-radius: 6px;`};
`;

export const RelativeFlex = styled(Flex)`
    position: relative;
`;
