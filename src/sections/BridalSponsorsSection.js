import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  InformationBox,
  InformationContainer,
} from "../components/InformationContainer";
import Button from "../components/button";

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
`;

const RSVP = styled(InformationBox)`
  background: #c3bb9f;

  h3 {
    color: #000;
  }

  p {
    color: #000;
    margin-top: 8px;
  }
`;
const SponsorContainer = styled(InformationBox)`
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
        <RSVP>
          <TextContainer>
            <Link to="/bridalparty">
              <Button>Bridal Party</Button>
            </Link>
          </TextContainer>
        </RSVP>
        <SponsorContainer>
          <Img
            fluid={data.rsvp.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
          <TextContainer>
            <Link to="/sponsors">
              <Button>Sponsors</Button>
            </Link>
          </TextContainer>
        </SponsorContainer>
      </StyledInformationContainer>
    )}
  />
);

export default BridalSponsorsSection;
