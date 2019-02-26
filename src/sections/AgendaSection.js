import React from 'react';
import styled from 'styled-components';
import TextContainer from "../components/TextContainer";


const Item = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;
`;

const AgendaSection = () => (
  <TextContainer>
      <Item>
          <h3>THE CEREMONY</h3>
          <p>Begins 5:00 in the Rock Garden</p>
          <p>The Casino</p>
          <p>San Clemente, CA</p>
      </Item>
      <Item>
          <h3>COCKTAIL HOUR</h3>
          <p>Immediately following the Ceremony</p>
          <p>on the Patio of the Stars</p>
      </Item>
      <Item>
          <h3>THE CELEBRATION</h3>
          <p>Grand Ballroom for Dinner, Dancing, & Drinks</p>
          <p>Semi-formal Garden Attire</p>
      </Item>
  </TextContainer>
);

export default AgendaSection;
