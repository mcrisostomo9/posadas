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

const MapLink = styled.a`
  text-decoration: none;
  margin-top: 10px;
  width: 175px;
  button {
    background: transparent;
    border: 1px solid #000;
    cursor: pointer;
    width: 100%;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;

    :hover {
      background: #000;
      color: #fff;
    }
  }
`;

const Location = styled(InformationBox)`
  display: block;
  position: relative;
`;

const Accommodation = styled(InformationBox)`
  background: #c3bb9f;
  position: relative;

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

const StyledH3 = styled(H3)`
  color: #000;
`;

const StyledP = styled(P)`
  color: #000;
`;

const SingleAccommodation = styled.div`
  text-align: center;

  h4 {
    font-size: 20px;
    margin: 0 0 10px;
  }

  margin-bottom: 16px;
`;

const AccommodationLink = styled.a`
  text-decoration: underline;
  color: #000;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const AccommodationArray = [
  {
    name: "Ritz Carlton Laguna Niguel",
    link: "www.ritzcarlton.com/",
  },
  {
    name: "St. Regis Monarch Beach",
    link: "www.monarchbeachresort.com",
  },
  { name: "Best Western Inn Casablanca", link: "www.bestwestern.com" },
  { name: "Doubletree Dana Point", link: "www.doubletree3.hilton.com" },
  {
    name: "Residence Inn Dana Point San Juan Capistrano",
    link: "www.marriot.com",
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
            <StyledH3>The Casino</StyledH3>
            <StyledP>140 West Avenida Pico,</StyledP>
            <StyledP>San Clemente, CA 92672</StyledP>
            <MapLink
              target="_blank"
              href="https://www.google.com/maps/place/140+Avenida+Pico,+San+Clemente,+CA+92672/@33.432182,-117.630652,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcf408918a7d37:0xaee354da2849cc84!8m2!3d33.432182!4d-117.630652"
            >
              <button>Check it out</button>
            </MapLink>
          </TextContainer>
        </Location>
        <Accommodation>
          {AccommodationArray.map(i => (
            <SingleAccommodation>
              <h4>{i.name}</h4>
              <AccommodationLink target="_blank" href={`https://${i.link}`}>
                {i.link}
              </AccommodationLink>
            </SingleAccommodation>
          ))}
        </Accommodation>
      </InformationContainer>
    )}
  />
);

export default LocationSection;
