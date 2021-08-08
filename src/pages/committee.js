import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Header = styled.h1``;

// markup
const CommittePage = () => {
  return (
    <Layout>
      <main>
        <title>A Question of Sport - Committe</title>
        <Header>Committe</Header>
        <p>
          All categories are decided by the Committee. Their decision is final.
          Membership of the Committee is by way of invitation only.
        </p>
      </main>
    </Layout>
  );
};

export default CommittePage;
