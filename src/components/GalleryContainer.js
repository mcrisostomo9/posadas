import React from "react";
import styled from "styled-components";
import mq from "../utils/breakpoints";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  ${mq.a768} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.a1200} {
    //grid-template-columns: repeat(4, 1fr);
  }
`;

const GallerySection = props => <Container>{props.children}</Container>;

export default GallerySection;
