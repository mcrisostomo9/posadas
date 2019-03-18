import React from "react";
import Layout from "../components/layout";
import StickyNav from "../components/StickyNav";
import SEO from "../components/seo";
import BurgerMenu from "../components/burgerMenu";
import styled from "styled-components";
import P from "../components/P";
import mq from "../utils/breakpoints";

const FaqContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 70px auto 20px;
  text-align: center;
`;

const PageContainer = styled.div`
  padding: 20px 10px;
  text-align: center;
  position: relative;
  z-index: 0;
`;

const SingleFaqContainer = styled.div`
  margin-bottom: 30px;
`;

const Question = styled.div`
  font-family: "Playfair Display", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  font-size: 16px;
  margin-bottom: 8px;

  ${mq.a768} {
    font-size: 18px;
  }

  ${mq.a1200} {
    font-size: 22px;
  }
`;

const StyledP = styled(P)`
  font-size: 13px;

  ${mq.a768} {
    font-size: 16px;
  }

  ${mq.a1200} {
    font-size: 18px;
  }
`;

const faq = [
  {
    question: "RSVP Deadline",
    answer:
      "Please make sure to RSVP using the link on our website no later than July 1 st , 2019. Each person attending will need to RSVP individually on the link.",
  },
  {
    question: "Plus Ones (+1)",
    answer:
      "We have a strict guest list to stay on budget. Our wedding is strictly RSVP only. We will only able to accommodate those listed on your invitation.",
  },
  {
    question: "Children",
    answer:
      "We love children, however we have decided to make this an adults-only celebration.",
  },
  {
    question: "Arrival Time",
    answer:
      "We recommend that you arrive an hour before the start of the ceremony, to make sure everyone is on time and we can get the party started as scheduled.",
  },
  {
    question: "What to Wear",
    answer:
      "Dress code is Semi-formal Garden Attire. Ladies should wear cocktail or nice summer dresses, and the gentlemen should wear a suit or a sports coat. Comfortable footwear is recommended for the outdoor ceremony.",
  },
  {
    question: "Parking",
    answer:
      "There is ample public parking ($1.50/hour) across the street and around the Casino property. Before 9am and after 6pm parking is free.",
  },
  {
    question: "Photos & Social Media",
    answer:
      "Please note that our ceremony will be unplugged. We ask that all phones and cameras be silenced and put away throughout the duration of the ceremony. However, we encourage guests to take photos afterwards during cocktail hour as well as the reception. Please be sure tag each photo on social media with our wedding hashtag, #ThisIsPosadas2019 so we can keep track of all of your photos!",
  },
  {
    question: "Cash Bar",
    answer:
      "Please note we will be offering a full selection of cocktails, beer, and wine until 10 p.m., at which point there will be open bar for beer and wine only, and cash bar for cocktails.",
  },
  {
    question: "Registry",
    answer: `We’re so lucky to be able to spend our wedding day with all of our friends and family; your presence is truly all the present we need. Because we have all the basic household supplies covered, if you’d like to get us a gift to celebrate, we’ve created a registry fund at theknot.com/us/thisisposadas2019/registry that we’ll use to build our life together.`,
  },
];

const FaqsPage = () => (
  <Layout>
    <SEO title="FAQs" />
    <StickyNav />
    <BurgerMenu />
    <PageContainer>
      <FaqContainer>
        <h1>FAQ</h1>
        <div>
          {faq.map(i => (
            <SingleFaqContainer>
              <Question>{i.question}</Question>
              <StyledP>{i.answer}</StyledP>
            </SingleFaqContainer>
          ))}
        </div>
        <StyledP>
          For more information on the venue, please visit the website at
          <a
            href="http://thecasinosanclemente.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.thecasinosanclemente.com
          </a>
        </StyledP>
      </FaqContainer>
    </PageContainer>
  </Layout>
);

export default FaqsPage;
