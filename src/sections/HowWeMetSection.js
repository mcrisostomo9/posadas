import React from "react";
import TextContainer, { Item } from "../components/TextContainer";
import H3 from "../components/H3";
import P from "../components/P";

const HowWeMetSection = () => (
  <TextContainer>
    <Item>
      <H3>HOW WE MET</H3>
      <P>
        Matt was out with friends in Los Angeles and there she was. They locked
        eyes and he offered to buy her tacos. As they say, the rest is history!
      </P>
    </Item>
    <Item>
      <H3>THE FIRST DATE</H3>
      <P>
        He took her to her first baseball game. They eat bad sushi and Dodger
        dogs. They miss three home runs and the seventh inning stretch. Best
        failed first date ever.
      </P>
    </Item>
    <Item>
      <H3>THE PROPOSAL</H3>
      <P>
        Fast forward three years later. Redemption for the failed first date.
        Delicious sushi and garlic fries. Seats right behind home plate, Dodgers
        vs. Rockies. Dodgers lose but Matt wins the girl. Sunset at Echo Park he
        gets on one knee.
      </P>
    </Item>
  </TextContainer>
);

export default HowWeMetSection;
