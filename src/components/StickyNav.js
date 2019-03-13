import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const TitleContainer = styled.div`
  z-index: 1;
  padding-top: 20px;
  background: #fff;
  position: fixed;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #c3bb9f;
  a {
    text-decoration: none;
    color: #000;
  }
`;

const StickyNav = () => (
  <TitleContainer>
    <Link to="/">
      <h1>THIS IS POSADAS</h1>
    </Link>
  </TitleContainer>
);

export default StickyNav;
