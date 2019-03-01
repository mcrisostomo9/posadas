import React from "react";
import {
  InformationContainer,
  InformationBox,
} from "../components/InformationContainer";
import styled from "styled-components";
import H3 from "../components/H3";
import P from "../components/P";
import locationImg from "../images/location.jpg";

const MapLink = styled.a`
  width: 100%;
  text-decoration: none;
`;

const Accommodation = styled(InformationBox)`
  background-color: #b1b1b1;
`;

const Location = styled(InformationBox)`
  background-image: url(${locationImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledH3 = styled(H3)`
  color: #fff;
`;

const StyledP = styled(P)`
  color: #fff;
`;

const AccommodationLink = styled.a`
  text-decoration: none;
`;

const LocationSection = () => (
  <InformationContainer>
    <MapLink
      target="_blank"
      href="https://www.google.com/maps/place/140+Avenida+Pico,+San+Clemente,+CA+92672/@33.432182,-117.630652,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcf408918a7d37:0xaee354da2849cc84!8m2!3d33.432182!4d-117.630652"
    >
      <Location>
        <StyledH3>The Casino</StyledH3>
        <StyledP>140 West Avenida Pico,</StyledP>
        <StyledP>San Clemente, CA 92672</StyledP>
      </Location>
    </MapLink>
    <Accommodation>
      <H3>Ritz Carlton Laguna Niguel</H3>
      <AccommodationLink href="www.ritzcarlton.com">
        www.ritzcarlton.com
      </AccommodationLink>
      <H3>St. Regis Monarch Beach</H3>
      <AccommodationLink href="www.monarchbeachresort.com">
        www.monarchbeachresort.com
      </AccommodationLink>
    </Accommodation>
  </InformationContainer>
);

export default LocationSection;
