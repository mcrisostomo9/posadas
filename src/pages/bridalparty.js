import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import StickyNav from "../components/StickyNav";
import SEO from "../components/seo";
import BurgerMenu from "../components/burgerMenu";
import styled from "styled-components";
import mq from "../utils/breakpoints";

const ImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 0;
  text-align: center;
  padding: 0 10px;

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
  max-width: 1400px;
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
`;

const Subtitle = styled.h3`
  font-family: "Raleway", sans-serif;
  text-decoration: underline;
`;

const PartyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${mq.a992} {
    flex-direction: row;
  }
`;

const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  font-size: 14px;

  ${mq.a1400} {
    font-size: 16px;
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
          </BridalPartySection>
          <SponsorSectionContainer>
            <TextContainer>
              <Title>Sponsors</Title>
              <PartyContainer>
                <NamesContainer>
                  <Subtitle>Bride</Subtitle>
                  {brideSponsorArray.map(i => (
                    <StyledP>{i}</StyledP>
                  ))}
                </NamesContainer>
                <NamesContainer>
                  <Subtitle>Groom</Subtitle>
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
