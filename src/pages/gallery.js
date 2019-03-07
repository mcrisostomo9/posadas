import React from "react";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GalleryContainer from "../components/GalleryContainer";
import P from "../components/P";

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    color: #000;
    font-size: 16px;
  }
`;

const GalleryPage = props => (
  <Layout>
    <SEO title="Page two" />
    <PageContainer>
      <Link to="/">
        <h1>This is Posadas</h1>
      </Link>
      <GalleryContainer>
        <Img fluid={props.data.galleryOne.childImageSharp.fluid} />
        <Img fluid={props.data.galleryTwo.childImageSharp.fluid} />
        <Img fluid={props.data.galleryThree.childImageSharp.fluid} />
        <Img fluid={props.data.gallery25.childImageSharp.fluid} />
        <Img fluid={props.data.gallery26.childImageSharp.fluid} />
        <Img fluid={props.data.gallery27.childImageSharp.fluid} />
        <Img fluid={props.data.galleryFour.childImageSharp.fluid} />
        <Img fluid={props.data.galleryFive.childImageSharp.fluid} />
        <Img fluid={props.data.gallerySix.childImageSharp.fluid} />
        <Img fluid={props.data.gallerySeven.childImageSharp.fluid} />
        <Img fluid={props.data.galleryEight.childImageSharp.fluid} />
        <Img fluid={props.data.galleryNine.childImageSharp.fluid} />
        <Img fluid={props.data.gallery10.childImageSharp.fluid} />
        <Img fluid={props.data.gallery11.childImageSharp.fluid} />
        <Img fluid={props.data.gallery12.childImageSharp.fluid} />
        <Img fluid={props.data.gallery13.childImageSharp.fluid} />
        <Img fluid={props.data.gallery14.childImageSharp.fluid} />
        <Img fluid={props.data.gallery15.childImageSharp.fluid} />
        <Img fluid={props.data.gallery16.childImageSharp.fluid} />
        <Img fluid={props.data.gallery17.childImageSharp.fluid} />
        <Img fluid={props.data.gallery18.childImageSharp.fluid} />
        <Img fluid={props.data.gallery19.childImageSharp.fluid} />
        <Img fluid={props.data.gallery20.childImageSharp.fluid} />
        <Img fluid={props.data.gallery21.childImageSharp.fluid} />
        <Img fluid={props.data.gallery22.childImageSharp.fluid} />
        <Img fluid={props.data.gallery23.childImageSharp.fluid} />
        <Img fluid={props.data.gallery24.childImageSharp.fluid} />
        <Img fluid={props.data.gallery28.childImageSharp.fluid} />
      </GalleryContainer>
      <P>Photography by Arjay Bernardino</P>
      <a
        href="https://arjaybphoto.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <P>arjaybphoto.com/</P>
      </a>
    </PageContainer>
  </Layout>
);

export default GalleryPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    galleryOne: file(relativePath: { eq: "galleryOne.jpg" }) {
      ...fluidImage
    }
    galleryTwo: file(relativePath: { eq: "galleryTwo.jpg" }) {
      ...fluidImage
    }
    galleryThree: file(relativePath: { eq: "galleryThree.jpg" }) {
      ...fluidImage
    }
    galleryFour: file(relativePath: { eq: "galleryFour.jpg" }) {
      ...fluidImage
    }
    galleryFive: file(relativePath: { eq: "galleryFive.jpg" }) {
      ...fluidImage
    }
    gallerySix: file(relativePath: { eq: "gallerySix.jpg" }) {
      ...fluidImage
    }
    gallerySeven: file(relativePath: { eq: "gallerySeven.jpg" }) {
      ...fluidImage
    }
    galleryEight: file(relativePath: { eq: "galleryEight.jpg" }) {
      ...fluidImage
    }
    galleryNine: file(relativePath: { eq: "galleryNine.jpg" }) {
      ...fluidImage
    }
    gallery10: file(relativePath: { eq: "gallery10.jpg" }) {
      ...fluidImage
    }
    gallery11: file(relativePath: { eq: "gallery11.jpg" }) {
      ...fluidImage
    }
    gallery12: file(relativePath: { eq: "gallery12.jpg" }) {
      ...fluidImage
    }
    gallery13: file(relativePath: { eq: "gallery13.jpg" }) {
      ...fluidImage
    }
    gallery14: file(relativePath: { eq: "gallery14.jpg" }) {
      ...fluidImage
    }
    gallery14: file(relativePath: { eq: "gallery14.jpg" }) {
      ...fluidImage
    }
    gallery15: file(relativePath: { eq: "gallery15.jpg" }) {
      ...fluidImage
    }
    gallery16: file(relativePath: { eq: "gallery16.jpg" }) {
      ...fluidImage
    }
    gallery17: file(relativePath: { eq: "gallery17.jpg" }) {
      ...fluidImage
    }
    gallery18: file(relativePath: { eq: "gallery18.jpg" }) {
      ...fluidImage
    }
    gallery19: file(relativePath: { eq: "gallery19.jpg" }) {
      ...fluidImage
    }
    gallery20: file(relativePath: { eq: "gallery20.jpg" }) {
      ...fluidImage
    }
    gallery21: file(relativePath: { eq: "gallery21.jpg" }) {
      ...fluidImage
    }
    gallery22: file(relativePath: { eq: "gallery22.jpg" }) {
      ...fluidImage
    }
    gallery23: file(relativePath: { eq: "gallery23.jpg" }) {
      ...fluidImage
    }
    gallery24: file(relativePath: { eq: "gallery24.jpg" }) {
      ...fluidImage
    }
    gallery25: file(relativePath: { eq: "gallery25.jpg" }) {
      ...fluidImage
    }
    gallery26: file(relativePath: { eq: "gallery26.jpg" }) {
      ...fluidImage
    }
    gallery27: file(relativePath: { eq: "gallery27.jpg" }) {
      ...fluidImage
    }
    gallery28: file(relativePath: { eq: "gallery28.jpg" }) {
      ...fluidImage
    }
  }
`;
