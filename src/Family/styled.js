import styled from 'styled-components';
import { color } from 'styles';

export const Card = styled.div`
  position: relative;
  background: ${color.WHITE}
  border-radius: 5px;
  margin: 5px;
  padding-bottom: 5px;
`;

export const ButtonGroup = styled.div`
    margin: 20px

  button:first-child {
        border-radius: 5px 5px 0 0;
    }
    button:last-child {
        border-radius: 0 0 5px 5px;
    }
`;

export const InfoBlock = styled.div`
    padding: 30px;
    min-height: 230px;
    border-radius: 5px 5px 0 0;
`;
