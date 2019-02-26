import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  text-align: center;

  p {
    margin: 0;
    padding: 10px;
  }
`;

const AgendaSection = () => (
  <Container>
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
  </Container>
);

export default AgendaSection;
