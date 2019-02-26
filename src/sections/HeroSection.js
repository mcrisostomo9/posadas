import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from "gatsby";
import Img from "gatsby-image"
import mq from "../utils/breakpoints";

const Container = styled.div`
  position: relative;
  height: 100vh;

  // ${mq.a500} {
  //   height: 600px;
  // }
  //
  // ${mq.a768} {
  //   height: 700px;
  // }
  //
  // ${mq.a992} {
  //   height: 100vh;
  // }
  ${mq.a1400} {
    height: 1000px;
  }
`;

const Title = styled.h1`
  color: #fff;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
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
    render={data =>
      <Container>
          <Img
            fluid={data.hero.childImageSharp.fluid}
            style={{height: "100%"}}
          />
          <Title>THIS IS POSADAS</Title>
      </Container>
    }
  />
);

export default HeroSection;
