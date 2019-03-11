import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { ReactTypeformEmbed } from "react-typeform-embed";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  InformationBox,
  InformationContainer,
} from "../components/InformationContainer";
import P from "../components/P";
import Button from "../components/button";

const StyledInformationContainer = styled(InformationContainer)`
  flex-direction: column-reverse;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
  }

  h3 {
    font-size: 34px;
    font-weight: 400;
  }

  button {
    font-size: 20px;
    line-height: normal;
    padding: 5px 0;
  }
`;

const RSVP = styled(InformationBox)`
  background: #c3bb9f;

  h3 {
    color: #000;
  }

  p {
    color: #000;
    margin-top: 8px;
  }
`;
const Gallery = styled(InformationBox)`
  display: block;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;

  h3 {
    color: #000;
  }

  a {
    width: 100%;
    max-width: 175px;
    height: auto;
  }
`;

class RsvpSection extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            rsvp: file(relativePath: { eq: "rsvp.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <StyledInformationContainer>
            <RSVP>
              <ReactTypeformEmbed
                popup
                autoOpen={false}
                url="https://markcrisostomo.typeform.com/to/OI4QVz"
                hideHeaders
                hideFooter
                ref={tf => {
                  this.typeformEmbed = tf;
                }}
              />
              <Button onClick={this.openForm}>RSVP</Button>
              <P>Please RSVP by...</P>
            </RSVP>
            <Gallery>
              <Img
                fluid={data.rsvp.childImageSharp.fluid}
                style={{ height: "100%" }}
              />
              <TextContainer>
                <Link to="/gallery">
                  <Button>View Gallery</Button>
                </Link>
              </TextContainer>
            </Gallery>
          </StyledInformationContainer>
        )}
      />
    );
  }
}

export default RsvpSection;
