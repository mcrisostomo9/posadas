import React from "react";
import Layout from "../components/layout";
import StickyNav from "../components/StickyNav";
import SEO from "../components/seo";
import BurgerMenu from "../components/burgerMenu";
import styled from "styled-components";
import P from "../components/P";

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
  margin-bottom: 16px;
`;

const faq = [
  {
    title: "RSVP Deadline",
    answer:
      "Please make sure to RSVP using the link on our website no later than July 1 st , 2019. Each person attending will need to RSVP individually on the link.",
  },
  {
    title: "Plus Ones (+1)",
    answer:
      "We have a strict guest list to stay on budget. Our wedding is strictly RSVP only. We will only able to accommodate those listed on your invitation.",
  },
  {
    title: "Children",
    answer:
      "We love children, however we have decided to make this an adults-only celebration.",
  },
  {
    title: "Arrival Time",
    answer:
      "We recommend that you arrive an hour before the start of the ceremony, to make sure everyone is on time and we can get the party started as scheduled.",
  },
  {
    title: "What to Wear",
    answer:
      "Dress code is Semi-formal Garden Attire. Ladies should wear cocktail or nice summer dresses, and the gentlemen should wear a suit or a sports coat. Comfortable footwear is recommended for the outdoor ceremony.",
  },
  {
    title: "Parking",
    answer:
      "There is ample public parking ($1.50/hour) across the street and around the Casino property. Before 9am and after 6pm parking is free.",
  },
  {
    title: "Photos & Social Media",
    answer:
      "Please note that our ceremony will be unplugged. We ask that all phones and cameras be silenced and put away throughout of the duration of the ceremony. However, we encourage guests to take photos afterwards during cocktail hour as well as the reception, and please be sure tag each photo on social media with our wedding hashtag, #ThisIsPosadas2019 so we can keep track of all of your photos!",
  },
  {
    title: "Cash Bar",
    answer:
      "We so look forward to dancing the night away with you! Please note we will be offering a full selection of cocktails, beer, and wine until 10 p.m., at which point the bar will turn over into a cash bar.",
  },
  {
    title: "Registry",
    answer:
      "We’re so lucky to be able to spend our wedding day with all of our friends and family; your presence is truly all the present we need. Because we have all the basic household supplies covered, if you’d like to get us a gift to celebrate, we’ve created a registry fund [insert the knot link here] that we’ll use to build our life together.",
  },
];

class FaqsPage extends React.Component {
  render() {
    return (
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
                  <div>{i.title}</div>
                  <P>{i.answer}</P>
                </SingleFaqContainer>
              ))}
            </div>
            <P>
              For more information on the venue, please visit the website at{" "}
              <a href="www.thecasinosanclemente.com" target="_blank">
                www.thecasinosanclemente.com
              </a>
            </P>
          </FaqContainer>
        </PageContainer>
      </Layout>
    );
  }
}

export default FaqsPage;
