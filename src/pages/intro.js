import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Header = styled.h1``;

// markup
const IntroPage = () => {
  return (
    <Layout>
      <main>
        <title>A Question of Sport</title>
        <Header>Introduction</Header>
        <p>
          Looking through the BBC website nowadays is a very disappointing
          experience. Not because of the shoddy news and political reporting but
          because, if you go to the ‘Sports’ section you are confronted with a
          list of ‘Sports’ that at best is ignorant and at worst a deliberate
          attack on common decency. I would demand my licence fee back if I paid
          one. This must be rectified.
        </p>
        <p>
          So, to be (a Sport) or not to be (a Sport). That is NOT the question.
          As this manifesto makes clear, by neatly and accurately separating
          true Sports from the impostors. Not only that, but this sanctum of
          true sporting endeavours goes even further, and actually categorizes
          all of those pretenders to the (sporting) throne by putting those
          charlatans in their proper place. As a great sports figure once said,
          “Do I not like that” (RIP Graham, England’s most underrated manager).
          In the case of many of the activities categorised below, I certainly
          do not like that.
        </p>
      </main>
    </Layout>
  );
};

export default IntroPage;
