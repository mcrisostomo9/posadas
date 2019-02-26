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

const HowWeMetSection = () => (
  <TextContainer>
      <Item>
          <h3>HOW WE MET</h3>
          <p>Matt was out with friends in Los Angeles and there she was. They locked eyes and he offered to buy her tacos. As they say, the rest is history!</p>
      </Item>
      <Item>
          <h3>THE FIRST DATE</h3>
          <p>He took her to her first baseball game. They eat bad sushi and Dodger dogs. They miss three home runs and the seventh inning stretch. Best failed first date ever.</p>
      </Item>
      <Item>
          <h3>THE PROPOSAL</h3>
          <p>Fast forward three years later. Redemption for the failed first date. Delicious sushi and garlic fries. Seats right behind home plate, Dodgers vs. Rockies. Dodgers lose but Matt wins the girl. Sunset at Echo Park he gets on one knee.</p>
      </Item>
  </TextContainer>
);

export default HowWeMetSection;
