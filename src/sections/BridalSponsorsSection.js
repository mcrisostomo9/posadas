import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  InformationBox,
  InformationContainer,
} from "../components/InformationContainer";
import Button from "../components/button";
import H3 from "../components/H3";
import P from "../components/P";
import mq from "../utils/breakpoints";

const StyledInformationContainer = styled(InformationContainer)`
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

  flex-direction: column-reverse;

  ${mq.a768} {
    flex-direction: row;
  }
`;

const ThingsToDoSquare = styled(InformationBox)`
  background: #c3bb9f;

  h3 {
    color: #000;
  }

  p {
    color: #000;
    margin-top: 8px;
  }
`;
const BridalSquare = styled(InformationBox)`
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
  flex-direction: column;

  h3 {
    color: #000;
  }

  a {
    width: 100%;
    max-width: 175px;
    height: auto;
  }
`;

const BridalSponsorsSection = () => (
  <StaticQuery
    query={graphql`
      query {
        rsvp: file(relativePath: { eq: "gallery11.jpg" }) {
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
        <ThingsToDoSquare>
          <TextContainer>
            <H3>Things to do</H3>
            <P>San Clemente State Beach & Pier</P>
            <P>San Onofre State Beach</P>
            <P>T-Street Beach</P>
            <P>Dana Point Harbor</P>
            <P>Mission San Juan Capistrano</P>
          </TextContainer>
        </ThingsToDoSquare>
        <BridalSquare>
          <Img
            fluid={data.rsvp.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
          <TextContainer>
            <Link to="/bridalparty">
              <Button>Bridal Party</Button>
            </Link>
          </TextContainer>
        </BridalSquare>
      </StyledInformationContainer>
    )}
  />
);

export default BridalSponsorsSection;
