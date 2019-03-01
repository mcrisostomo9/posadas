import styled from "styled-components";
import mq from "../utils/breakpoints";

const P = styled.p`
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;

  ${mq.a1200} {
    font-size: 20px;
  }
`;

export default P;
