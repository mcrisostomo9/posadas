import React from "react";
import styled from "styled-components";
import mq from "../utils/breakpoints";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 70px auto 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  ${mq.a768} {
    margin-top: 80px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`;

const GallerySection = props => <Container>{props.children}</Container>;

export default GallerySection;
