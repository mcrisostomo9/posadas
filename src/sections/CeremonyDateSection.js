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
`;

const CeremonyDateSection = () => (
  <Container>
      <CeremonyTitle>30 AUGUST 2019</CeremonyTitle>
  </Container>
);

export default CeremonyDateSection;
