import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import StickyNav from "../components/StickyNav";
import BurgerMenu from "../components/burgerMenu";
import { PageContainer } from "../pages/engagement";
import GalleryContainer from "../components/GalleryContainer";

const GalleryTemplate = ({
  data: {
    prismicWeddingGallery: {
      data: { title, gallery },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={`${title.text} Gallery`} />
      <StickyNav />
      <BurgerMenu />
      <PageContainer>
        <h1 style={{ marginTop: "3rem" }}>{title.text}</h1>
        <GalleryContainer>
          {gallery.map((g, i) => {
            return (
              <div>
                <Img fluid={g.image.localFile.childImageSharp.fluid} key={i} />
              </div>
            );
          })}
        </GalleryContainer>
      </PageContainer>
    </Layout>
  );
};

export default GalleryTemplate;

export const GALLERY_QUERY = graphql`
  query($id: String!) {
    prismicWeddingGallery(id: { eq: $id }) {
      data {
        title {
          text
        }
        gallery {
          image {
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
