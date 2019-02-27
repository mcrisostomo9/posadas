import React from 'react';
import bg from '../images/accommodationBg.jpeg';
import styled from "styled-components";
import {InformationBox, InformationContainer} from "../components/InformationContainer";
import H3 from "../components/H3";
import P from "../components/P";
import {Link} from "gatsby";

const StyledInformationContainer = styled(InformationContainer)`
  a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
  }
`;

const Transportation = styled(InformationBox)`
  background: #dad9d7;
  
  :hover{
  filter: contrast(90%);
 }
`;

const Accommodation = styled(InformationBox)`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  
 
`;

const AccommodationSection = () => (
  <StyledInformationContainer>
      <Link to="/gallery">
          <Transportation>
              <H3>Gallery</H3>
          </Transportation>
      </Link>
      <Accommodation>
          <H3>Accommodation</H3>
          <P>The Rock Garden</P>
      </Accommodation>
  </StyledInformationContainer>
);

export default AccommodationSection;
