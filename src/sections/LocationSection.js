import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
  InformationContainer,
  InformationBox,
} from "../components/InformationContainer";
import styled from "styled-components";
import H3 from "../components/H3";
import P from "../components/P";
import Button from "../components/button";
import mq from "../utils/breakpoints";

const MapLink = styled.a`
  text-decoration: none;
  margin-top: 10px;
  width: 100%;
  max-width: 175px;
`;

const Location = styled(InformationBox)`
  display: block;
  position: relative;
`;

const Accommodation = styled(InformationBox)`
  background: #c3bb9f;
  position: relative;
  padding: 12px 36px;
  height: 600px;

  :hover {
    filter: none;
  }

  ${mq.a768} {
    padding: 0;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleH3 = styled(H3)`
  color: #000;
`;

const StyledH3 = styled(H3)`
  color: #000;
  font-size: 16px;

  ${mq.a1200} {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const StyledP = styled(P)`
  color: #000;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-family: Raleway, sans-serif;
  margin-top: 1rem;
  outline: none;
  :hover {
    text-decoration: underline;
  }
`;

const LocationSection = () => (
  <StaticQuery
    query={graphql`
      query {
        location: file(relativePath: { eq: "location.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allPrismicWeddingGallery {
          edges {
            node {
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <InformationContainer>
        <Accommodation>
          <TitleH3>Wedding Photos</TitleH3>
          {data.allPrismicWeddingGallery.edges.map(i => {
            const galleryLink = i.node.data.title.text;
            return (
              <StyledLink to={`/wedding-gallery/${galleryLink.toLowerCase()}`}>
                {galleryLink}
              </StyledLink>
            );
          })}
          <StyledLink />
        </Accommodation>
        <Location>
          <Img
            fluid={data.location.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
          <TextContainer>
            <TitleH3>THE CASINO</TitleH3>
            <StyledP>140 West Avenida Pico,</StyledP>
            <StyledP>San Clemente, CA 92672</StyledP>
            <MapLink
              target="_blank"
              href="https://www.google.com/maps/place/140+Avenida+Pico,+San+Clemente,+CA+92672/@33.432182,-117.630652,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcf408918a7d37:0xaee354da2849cc84!8m2!3d33.432182!4d-117.630652"
            >
              <Button>View Map</Button>
            </MapLink>
          </TextContainer>
        </Location>
      </InformationContainer>
    )}
  />
);

export default LocationSection;
