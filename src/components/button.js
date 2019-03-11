import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  max-width: 175px;
  z-index: 100;
  background: transparent;
  border: 1px solid #000;
  cursor: pointer;

  :hover {
    background: #000;
    color: #fff;
  }
`;

export default Button;
