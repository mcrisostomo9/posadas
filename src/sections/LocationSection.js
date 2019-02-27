import React from 'react';
import cloudsBG from '../images/cloudsBG.jpeg';
import {InformationContainer, InformationBox} from "../components/InformationContainer";
import styled from "styled-components";
import H3 from "../components/H3";
import P from "../components/P";

const Airport = styled(InformationBox)`
  background-image: url(${cloudsBG});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Location = styled(InformationBox)`
  background: #b1b1b1;
`;

const LocationSection = () => (
  <InformationContainer>
      <Airport>
          <H3>Airport</H3>
          <P>John Wayne Airport</P>
      </Airport>
      <Location>
          <H3>Location</H3>
          <P>The Rock Garden</P>
      </Location>
  </InformationContainer>
);

export default LocationSection;
