import styled from 'styled-components';
import mq from "../utils/breakpoints";

export const Item = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;
  max-width: 400px;
`;

const TextContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;

  ${mq.a768} {
    flex-direction: row;
    padding: 60px 20px;
    align-items: start;
  }
  
  ${mq.a1200}{
      padding: 80px 20px;
  }
`;

export default  TextContainer;