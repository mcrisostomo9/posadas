import React from "react";
import rsvpImg from "../images/rsvp.jpg";
import styled from "styled-components";
import {
  InformationBox,
  InformationContainer,
} from "../components/InformationContainer";
import H3 from "../components/H3";
import { Link } from "gatsby";

const StyledInformationContainer = styled(InformationContainer)`
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
  }
`;

const Transportation = styled(InformationBox)`
  background-image: url(${rsvpImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const RSVP = styled(InformationBox)`
  background: #dad9d7;
  h3 {
    color: #fff;
  }
`;

const RsvpSection = () => (
  <StyledInformationContainer>
    <Link to="/gallery">
      <RSVP>
        <H3>RSVP</H3>
      </RSVP>
    </Link>
    <Link to="/gallery">
      <Transportation>
        <H3>Gallery</H3>
      </Transportation>
    </Link>
  </StyledInformationContainer>
);

export default RsvpSection;
