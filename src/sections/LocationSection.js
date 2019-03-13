import React from "react";
import { graphql, StaticQuery } from "gatsby";
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

  :hover {
    filter: none;
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

const H4 = styled.h4`
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

const SingleAccommodation = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const OtherAccommodation = styled(SingleAccommodation)`
  margin-bottom: 10px;
`;

const AccommodationLink = styled.a`
  text-decoration: underline;
  color: #000;
  font-family: Raleway, sans-serif;
  font-size: 14px;

  ${mq.a768} {
    font-size: 16px;
  }
`;

const Description = styled(P)`
  font-size: 14px !important;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const AccommodationArray = [
  {
    name: "Residence Inn Dana Point San Juan Capistrano",
    link:
      "marriott.com/hotels/travel/snasj-residence-inn-dana-point-san-juan-capistrano/",
    linkText: "marriott.com",
    description:
      "For your convenience, a block of rooms has been reserved at Residence Inn Dana Point San Juan Capistrano. When calling to make your reservation, please mention the Posadas wedding in order to receive a discounted rate.",
  },
  {
    name: "Ritz Carlton Laguna Niguel",
    link: "www.ritzcarlton.com",
    linkText: "ritzcarlton.com",
  },
  {
    name: "St. Regis Monarch Beach",
    link: "www.monarchbeachresort.com",
    linkText: "monarchbeachresort.com",
  },
  {
    name: "Best Western Inn Casablanca",
    link: "www.bestwestern.com",
    linkText: "bestwestern.com",
  },
  {
    name: "Doubletree Dana Point",
    link: "doubletree3.hilton.com/en/index.html",
    linkText: "doubletree3.hilton.com",
  },
];

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
      }
    `}
    render={data => (
      <InformationContainer>
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
        <Accommodation>
          <SingleAccommodation>
            <StyledH3>{AccommodationArray[0].name}</StyledH3>
            <Description>{AccommodationArray[0].description}</Description>
            <AccommodationLink
              target="_blank"
              href={`https://${AccommodationArray[0].link}`}
            >
              {AccommodationArray[0].linkText}
            </AccommodationLink>
          </SingleAccommodation>
          <StyledH3>Additional Accommodations</StyledH3>
          {AccommodationArray.map(
            i =>
              !i.description && (
                <OtherAccommodation>
                  <AccommodationLink target="_blank" href={`https://${i.link}`}>
                    {i.linkText}
                  </AccommodationLink>
                </OtherAccommodation>
              )
          )}
        </Accommodation>
      </InformationContainer>
    )}
  />
);

export default LocationSection;
