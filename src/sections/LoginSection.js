import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import mq from "../utils/breakpoints";
import Login from "../components/login";

const Container = styled.div`
  position: relative;
  height: 100vh;

  ${mq.a1600} {
    height: 1050px;
  }

  ${mq.a1800} {
    height: auto;
  }
`;

const LoginSection = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Img
          fluid={data.hero.childImageSharp.fluid}
          style={{ height: "100%" }}
        />
        <Login />
      </Container>
    )}
  />
);

export default LoginSection;
