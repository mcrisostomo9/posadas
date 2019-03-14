import React from "react";
import Layout from "../components/layout";
import StickyNav from "../components/StickyNav";
import SEO from "../components/seo";
import BurgerMenu from "../components/burgerMenu";

class FaqsPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="FAQs" />
        <StickyNav />
        <BurgerMenu />
        hello
      </Layout>
    );
  }
}

export default FaqsPage;
