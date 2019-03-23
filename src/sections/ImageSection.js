import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import mq from "../utils/breakpoints";

const Container = styled.div`
  position: relative;
  height: 400px;

  ${mq.a500} {
    height: 600px;
  }

  ${mq.a768} {
    height: 700px;
  }

  ${mq.a992} {
    height: 800px;
  }
  ${mq.a1200} {
    height: 100vh;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  top: 0;
  font-family: "Playfair Display", serif;
  font-size: 36px;
  width: 100%;

  ${mq.a1200} {
    font-size: 48px;
  }

  ${mq.a1400} {
    font-size: 64px;
  }
`;

const ImageSection = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "bw.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1980) {
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
        <OverlayText>M & N</OverlayText>
      </Container>
    )}
  />
);

export default ImageSection;
