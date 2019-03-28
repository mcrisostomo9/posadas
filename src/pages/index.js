import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../sections/HeroSection";
import CeremonyDateSection from "../sections/CeremonyDateSection";
import AgendaSection from "../sections/AgendaSection";
import HowWeMetSection from "../sections/HowWeMetSection";
import LocationSection from "../sections/LocationSection";
import RsvpSection from "../sections/RsvpSection";
import ImageSection from "../sections/ImageSection";
import BurgerMenu from "../components/burgerMenu";
import FaqSection from "../sections/FaqSection";
import BridalSponsorsSection from "../sections/BridalSponsorsSection";
import { isLoggedIn } from "../services/auth";
import LoginSection from "../sections/LoginSection";

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          keywords={[`Nicole Sangalang`, `Matt Posadas`, `Wedding`]}
          title="This is Posadas"
        />
        {isLoggedIn() ? (
          <>
            <BurgerMenu />
            <HeroSection />
            <CeremonyDateSection />
            <AgendaSection />
            <ImageSection />
            <HowWeMetSection />
            <LocationSection />
            <RsvpSection />
            <FaqSection />
            <BridalSponsorsSection />
          </>
        ) : (
          <>
            <div />
            <LoginSection />
          </>
        )}
      </Layout>
    );
  }
}

export default IndexPage;
