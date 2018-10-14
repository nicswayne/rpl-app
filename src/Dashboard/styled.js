import styled from 'styled-components';
import { color } from 'styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 1 auto;
`;

export const Card = styled.div`
  position: relative;
  background: ${color.WHITE}
  flex: 0 0 auto;
  flex-basis: 50%;
  max-width: 33%;
  border: 1px solid ${color.BLACK};
  padding: 30px 40px;
`;
