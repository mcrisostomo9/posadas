import React from 'react';
import cloudsBG from '../images/cloudsBG.jpeg';
import {InformationContainer, InformationBox} from "../components/InformationContainer";
import styled from "styled-components";

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
          <h3>Airport</h3>
          <p>John Wayne Airport</p>
      </Airport>
      <InformationBox>
          <h3>Location</h3>
          <p>THe Rock Garden</p>
      </InformationBox>
  </InformationContainer>
);

export default LocationSection;
