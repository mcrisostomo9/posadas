import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import StickyNav from "../components/StickyNav";
import SEO from "../components/seo";
import BurgerMenu from "../components/burgerMenu";
import styled from "styled-components";
import P from "../components/P";
import mq from "../utils/breakpoints";

const ImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 70px auto 20px;
  text-align: center;
`;

const PageContainer = styled.div`
  padding: 20px 0;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;

  ${mq.a1200} {
    flex-direction: row;
    padding: 20px 10px;
  }
`;

const Title = styled.h2`
  font-family: "Playfair Display", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
`;

const Subtitle = styled.h3`
  font-family: "Raleway", sans-serif;
`;

const PartyContainer = styled.div`
  display: flex;
`;

const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const bridesmaidArray = [
  "Katriana Sangalang | Maid of Honor",
  "Angela Sangalang",
  "Breanna Posadas",
  "Raiza Pimentel",
  "Pauline Limtaveemongkol",
  "Jayanne Abejo",
  "Micah Diamsay",
];

const groomsmenArray = [
  "Justin Kiat | Best Man",
  "Kenny Lawson",
  "Danny Darkoski",
  "James Thompson",
  "Casey Isaac",
  "Keith Young",
  "Albert Martinez",
  "Jonathan McCormick",
  "Brandyn Young",
];

const BridalPartyPage = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "gallery26.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Bridal Party" />
        <StickyNav />
        <BurgerMenu />
        <PageContainer>
          <ImgContainer>
            sd
            <Img fluid={data.hero.childImageSharp.fluid} />
          </ImgContainer>
          <TextContainer>
            <Title>Bridal Party</Title>
            <PartyContainer>
              <NamesContainer>
                <Subtitle>Bridesmaid</Subtitle>
                {bridesmaidArray.map(i => (
                  <StyledP>{i}</StyledP>
                ))}
              </NamesContainer>
              <NamesContainer>
                <Subtitle>Groomsmen</Subtitle>
                {groomsmenArray.map(i => (
                  <StyledP>{i}</StyledP>
                ))}
              </NamesContainer>
            </PartyContainer>
          </TextContainer>
        </PageContainer>
      </Layout>
    )}
  />
);

export default BridalPartyPage;
