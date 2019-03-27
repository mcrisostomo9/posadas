import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import mq from "../utils/breakpoints";

const Container = styled.div`
  position: relative;
  height: 100vh;

  ${mq.a992} {
    height: 800px;
  }

  ${mq.a1600} {
    height: 1050px;
  }

  ${mq.a1800} {
    height: auto;
  }
`;

const Title = styled.h1`
  color: #fff;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  font-family: "Playfair Display", serif;
  font-size: 36px;

  ${mq.a768} {
    font-size: 48px;
  }

  ${mq.a1200} {
    font-size: 64px;
    top: 40%;
  }

  ${mq.a1400} {
    font-size: 72px;
  }

  ${mq.a1800} {
    top: 25%;
  }
`;

const HeroSection = () => (
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
        <Title>THIS IS POSADAS</Title>
      </Container>
    )}
  />
);

export default HeroSection;
