import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const Header = styled.h1``;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>A Question of Sport</title>
        <Header>A Question of Sport</Header>
        <Link to="/intro">Intro</Link>
      </main>
    </Layout>
  );
};

export default IndexPage;
