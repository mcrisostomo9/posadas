import React from "react";
import TextContainer, { Item } from "../components/TextContainer";
import H3 from "../components/H3";
import P from "../components/P";

const AgendaSection = () => (
  <TextContainer>
    <Item>
      <H3>THE CEREMONY</H3>
      <P>Begins 5:00 in the Rock Garden</P>
      <P>The Casino</P>
      <P>San Clemente, CA</P>
    </Item>
    <Item>
      <H3>COCKTAIL HOUR</H3>
      <P>Immediately following the Ceremony</P>
      <P>on the Patio of the Stars</P>
    </Item>
    <Item>
      <H3>THE CELEBRATION</H3>
      <P>Grand Ballroom for Dinner, Drinks, & Dancing</P>
      <P>Semi-formal Garden Attire</P>
    </Item>
  </TextContainer>
);

export default AgendaSection;
