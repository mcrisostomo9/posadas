import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  InformationBox,
  InformationContainer,
} from "../components/InformationContainer";
import P from "../components/P";

const StyledInformationContainer = styled(InformationContainer)`
  flex-direction: column-reverse;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
  }

  h3 {
    font-size: 34px;
    font-weight: 400;
  }
`;

const RSVP = styled(InformationBox)`
  background: #c3bb9f;

  h3 {
    color: #000;
  }

  p {
    color: #000;
  }
`;
const Gallery = styled(InformationBox)`
  display: block;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;

  h3 {
    color: #000;
  }
`;

const RsvpSection = () => (
  <StaticQuery
    query={graphql`
      query {
        rsvp: file(relativePath: { eq: "rsvp.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledInformationContainer>
        <Link to="/rsvp">
          <RSVP>
            <h3>RSVP</h3>
            <P>Please RSVP by...</P>
          </RSVP>
        </Link>
        <Link to="/gallery">
          <Gallery>
            <Img
              fluid={data.rsvp.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
            <TextContainer>
              <h3>Gallery</h3>
            </TextContainer>
          </Gallery>
        </Link>
      </StyledInformationContainer>
    )}
  />
);

export default RsvpSection;
