import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import mq from "../utils/breakpoints";

const TitleContainer = styled.nav`
  z-index: 1;
  background: #fff;
  position: fixed;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #c3bb9f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
  }

  h1 {
    padding: 20px;
    font-size: 20px;
    margin: 0;

    ${mq.a1200} {
      padding: 20px 30px;
      font-size: 23px;
    }

    ${mq.a1400} {
      padding: 20px 30px;
      font-size: 26px;
    }
  }
`;

class StickyNav extends React.Component {
  render() {
    return (
      <TitleContainer>
        <Link to="/">
          <h1>THIS IS POSADAS</h1>
        </Link>
      </TitleContainer>
    );
  }
}

export default StickyNav;
