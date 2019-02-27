import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #c3bb9f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const CeremonyTitle = styled.h2`
  color: #000;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 32px;
`;

const CeremonyDateSection = () => (
  <Container>
      <CeremonyTitle>30 AUGUST 2019</CeremonyTitle>
  </Container>
);

export default CeremonyDateSection;
