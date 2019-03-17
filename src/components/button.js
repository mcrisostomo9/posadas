import styled from "styled-components";
import mq from "../utils/breakpoints";

const Button = styled.button`
  width: 100%;
  max-width: 175px;
  z-index: 100;
  background: transparent;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 18px;
  line-height: normal;
  padding: 5px 0;

  :hover {
    background: #000;
    color: #fff;
  }

  ${mq.a768} {
    font-size: 20px;
  }
`;

export const InvertedButton = styled(Button)`
  border: 1px solid #fff;
  color: #fff;
  background: transparent;

  :hover {
    border: 1px solid #000;
    background: #000;
  }
`;
export default Button;
