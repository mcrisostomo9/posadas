import styled from 'styled-components';
import mq from '../utils/breakpoints';

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;

  ${mq.a768} {
    flex-direction: row;
    height: 700px;
  }
`;

export const InformationBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

