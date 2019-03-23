import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import StickyNav from "../components/StickyNav";
import SEO from "../components/seo";
import BurgerMenu from "../components/burgerMenu";
import styled from "styled-components";
import mq from "../utils/breakpoints";
import H3 from "../components/H3";

const ImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 0;
  text-align: center;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mq.a768} {
    margin: 50px auto 20px;
  }

  ${mq.a1400} {
    padding: 0;
  }
`;

const PageContainer = styled.div`
  padding: 20px 0 0;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  max-width: 1680px;
  margin: 0 auto;
  flex-direction: column;

  ${mq.a1200} {
    padding: 20px 0 0;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  ${mq.a992} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const BridalPartySection = styled(SectionContainer)`
  margin-bottom: 30px;
`;

const SponsorSectionContainer = styled(SectionContainer)`
  flex-direction: column-reverse;
  ${mq.a992} {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  font-family: "Playfair Display", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  text-transform: uppercase;

  ${mq.a1400} {
    font-size: 24px;
  }
`;

const PartyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mq.a992} {
    flex-direction: row;
  }
`;

const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 0 16px;
`;

const StyledP = styled.p`
  font-size: 14px;

  ${mq.a1400} {
    font-size: 16px;
  }
`;

const bridesmaidArray = [
  "Katriana Sangalang | Maid of Honor",
  "Jayanne Abejo",

  "Micah Diamsay",
  "Pauline Limtaveemongkol",

  "Raiza Pimentel",

  "Breanna Posadas",
  "Angela Sangalang",
];

const groomsmenArray = [
  "Justin Kiat | Best Man",
  "Danny Darkoski",
  "Albert Hernandez",

  "Casey Isaac",
  "Kenny Lawson",

  "Jonathan McCormick",
  "James Thompson",

  "Brandyn Young",
  "Keith Young",
];

const brideSponsorArray = [
  "Rey Patawaran & Jennifer Galang",
  "Melvin Sangalang & Carol Patawaran Kondro",
  "Cenon Dela Cruz & Rosanne Aniete Ramos",
  "Nonato Manipon & Leila Soohoo",
];

const groomSponsorArray = [
  "Lito Posadas & Arlene Posadas",
  "Joe Mocilac & Susan Mocilac",
  "Diego Quaglierini & Leila Quaglierini",
];

const BridalPartyPage = () => (
  <StaticQuery
    query={graphql`
      query {
        bridalSection: file(relativePath: { eq: "gallery26.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sponsorsSection: file(relativePath: { eq: "gallery15.jpg" }) {
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
        <SEO title="Bridal Party | Sponsors" />
        <StickyNav />
        <BurgerMenu />
        <PageContainer>
          <BridalPartySection>
            <ImgContainer>
              <Img fluid={data.bridalSection.childImageSharp.fluid} />
            </ImgContainer>
            <TextContainer>
              <Title>Bridal Party</Title>
              <PartyContainer>
                <NamesContainer>
                  <H3>Bridesmaid</H3>
                  {bridesmaidArray.map(i => (
                    <StyledP>{i}</StyledP>
                  ))}
                </NamesContainer>
                <NamesContainer>
                  <H3>Groomsmen</H3>
                  {groomsmenArray.map(i => (
                    <StyledP>{i}</StyledP>
                  ))}
                </NamesContainer>
              </PartyContainer>
            </TextContainer>
          </BridalPartySection>
          <SponsorSectionContainer>
            <TextContainer>
              <Title>Sponsors</Title>
              <PartyContainer>
                <NamesContainer>
                  <H3>Bride</H3>
                  {brideSponsorArray.map(i => (
                    <StyledP>{i}</StyledP>
                  ))}
                </NamesContainer>
                <NamesContainer>
                  <H3>Groom</H3>
                  {groomSponsorArray.map(i => (
                    <StyledP>{i}</StyledP>
                  ))}
                </NamesContainer>
              </PartyContainer>
            </TextContainer>
            <ImgContainer>
              <Img fluid={data.sponsorsSection.childImageSharp.fluid} />
            </ImgContainer>
          </SponsorSectionContainer>
        </PageContainer>
      </Layout>
    )}
  />
);

export default BridalPartyPage;
