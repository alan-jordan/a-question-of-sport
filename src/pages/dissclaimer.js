import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Header = styled.h1``;

// markup
const Dissclaimer = () => {
  return (
    <Layout>
      <main>
        <title>A Question of Sport - Diss-claimer</title>
        <Header>Diss-claimer</Header>
        <p>
          The aim of this manifesto is not to ‘diss’ activities that are not
          true Sports or claim that they lack effort and commitment. It is just
          that they are not Sports, and this must be acknowledged and accepted.
        </p>
        <p>
          It should also be stated that this document is a work in progress. Any
          activities not included below can be submitted for classification.
        </p>
      </main>
    </Layout>
  );
};

export default Dissclaimer;
