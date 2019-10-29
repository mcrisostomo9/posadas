import styled from "styled-components";
import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { stack as Menu } from "react-burger-menu";

const BurgerContainer = styled.div`
  a {
    font-family: "Playfair Display", sans-serif !important;
    text-transform: uppercase;
  }
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 20px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #000;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #728071;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #c3bb9f;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  a {
    color: black;
    text-decoration: none;
    font-family: Raleway, sans-serif;
    margin-bottom: 16px;
    outline: none;
  }
`;

const BurgerMenu = () => {
  const {
    allPrismicWeddingGallery: { edges },
  } = useStaticQuery(NAV_QUERY);
  return (
    <BurgerContainer>
      <Menu right>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="bridalparty" className="menu-item" to="/bridalparty">
          Bridal Party
        </Link>
        <Link id="about" className="menu-item" to="/engagement">
          Engagement
        </Link>
        {edges.map(i => {
          const galleryLink = i.node.data.title.text;
          return (
            <Link to={`/wedding-gallery/${galleryLink.toLowerCase()}`}>
              {galleryLink}
            </Link>
          );
        })}
      </Menu>
    </BurgerContainer>
  );
};

export default BurgerMenu;

const NAV_QUERY = graphql`
  query NavQuery {
    allPrismicWeddingGallery {
      edges {
        node {
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`;
