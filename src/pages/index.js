import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../sections/HeroSection";
import CeremonyDateSection from "../sections/CeremonyDateSection";
import AgendaSection from "../sections/AgendaSection";
import HowWeMetSection from "../sections/HowWeMetSection";
import LocationSection from "../sections/LocationSection";
import AccommodationSection from "../sections/AccommodationSection";
import ImageSection from "../sections/ImageSection";

const IndexPage = () => (
  <Layout>
      <SEO keywords={[`Nicole Sangalang`, `Matt Posadas`, `Wedding`]}/>
      <HeroSection/>
      <CeremonyDateSection/>
      <AgendaSection/>
      <ImageSection/>
      <HowWeMetSection/>
      <LocationSection/>
      <AccommodationSection/>
  </Layout>
);

export default IndexPage
