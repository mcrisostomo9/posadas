import styled from 'styled-components';
import mq from "../utils/breakpoints";

const P = styled.p`
  font-size: 16px;

${mq.a1200}{
  font-size: 20px;
}
`;

export default P;