import styled from "styled-components";
import mq from "../utils/breakpoints";

const P = styled.p`
  font-size: 14px;

  ${mq.a768} {
    font-size: 16px;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default P;
