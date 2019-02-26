import React from 'react';
import bg from '../images/accommodationBg.jpeg';
import styled from "styled-components";
import {InformationBox, InformationContainer} from "../components/InformationContainer";

const Transportation = styled(InformationBox)`
  background: #dad9d7;
`;

const Accommodation = styled(InformationBox)`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AccommodationSection = () => (
  <InformationContainer>
      <Transportation>
          <h3>Transportation</h3>
          <p>John Wayne Airport</p>
      </Transportation>
      <Accommodation>
          <h3>Accommodation</h3>
          <p>THe Rock Garden</p>
      </Accommodation>
  </InformationContainer>
);

export default AccommodationSection;
