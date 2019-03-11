import React from "react";
import styled from "styled-components";
import mq from "../utils/breakpoints";

const Container = styled.div`
  background: #c3bb9f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  ${mq.a1200} {
    height: 600px;
  }
`;

const CeremonyTitle = styled.h2`
  color: #000;
  font-weight: 400;
  font-size: 36px;

  ${mq.a1200} {
    font-size: 48px;
  }
`;

const CeremonyDateSection = () => (
  <Container>
    <CeremonyTitle>30 AUGUST 2019</CeremonyTitle>
  </Container>
);

export default CeremonyDateSection;
