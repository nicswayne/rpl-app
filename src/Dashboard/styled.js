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
  border-radius: 5px;
  flex: 0 0 auto;
  flex-basis: 50%;
  max-width: 400px;
  margin: 5px;
`;

export const ButtonGroup = styled.div`
    margin: 20px

  button:first-child {
        border-radius: 5px 5px 0 0;
    }
    button:last-child {
        border-radius: 0 0 5px 5px;
    }

    button {
        ${'' /* margin: 1px */};
    }
`;

export const InfoBlock = styled.div`
    padding: 30px;
    min-height: 230px;
    border-radius: 5px 5px 0 0;
`;
