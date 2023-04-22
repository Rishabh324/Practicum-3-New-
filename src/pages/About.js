import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AboutImage from "../components/page-parts/AboutImage";
import PageContainer from "../components/page-parts/PageContainer";
import Toggle from "../components/Toggle";
import Nav from "../components/Nav";

const About = (props) => {
  //! State
  const [state] = useState({
    heading: "About Us",
    pageHeading: "World best travel agency company",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //! Function

  //! Render
  return (
    <>
      <Toggle />
      <Nav />
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="travell about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;
