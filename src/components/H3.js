import styled from "styled-components";
import mq from "../utils/breakpoints";

const H3 = styled.h3`
  font-weight: 400;
  margin: 0 0 8px;
  font-size: 18px;

  ${mq.a768} {
    font-size: 20px;
    margin: 0 0 12px;
  }

  ${mq.a1200} {
    font-size: 22px;
    margin: 0 0 16px;
  }
`;

export default H3;
