import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Header = styled.h1``;

// markup
const Classification = () => {
  return (
    <Layout>
      <main>
        <title>A Question of Sport - Classification</title>
        <Header>Sporting Index Classification. (SIC)</Header>
        <p>
          <strong>S</strong>
          pectators, fans, an audience, people who invest their time,love and
          money into it. If a tree falls in the forest and no one is around to
          hear it, does it make a sound?
        </p>
        <p>
          <strong>P</strong>
          ace, running, quick reactions. There needs to be more than a little
          effort. Laziness is not tolerated in the world of true sporting
          endeavours. Sorry Yakubu.
        </p>
        <p>
          <strong>O</strong>
          bject (of focus) – a ball, a puck, a shuttlecock – something to score
          with. To hit, to throw, to kick. Otherwise it’s just running and thus
          not a Sport.
        </p>
        <p>
          <strong>R</strong>
          ules, structure, organisation. Without rules there would be anarchy.
          The English invented most sports (probably) and we like rules.
        </p>
        <p>
          <strong>T</strong>
          ournament, competition, purpose, the will and desire to win – there
          can be only one! Otherwise, why bother?
        </p>
        <p>
          <strong>S</strong>
          kill, ability, dedication. You've got to hold and give. But do it at
          the right time. You can be slow or fast. But you must get to the line.
          They'll always hit you and hurt you. Defend and attack. There's only
          one way to beat them. Get round the back.
        </p>
      </main>
    </Layout>
  );
};

export default Classification;
