import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Header = styled.h1``;

// markup
const Classifications = () => {
  return (
    <Layout>
      <main>
        <title>A Question of Sport - Classifications</title>
        <Header>Classifications</Header>
        <ol>
          <li>Sport</li>
          <ol type="a">
            <li>Sport Proper</li>
            <li>Sub Sport</li>
            <li>Honorary Sport</li>
          </ol>
          <li>Exercise & transport</li>
          <ol type="a">
            <li>Exercise</li>
            <li>Transport</li>
          </ol>
          <li>Games, Hobbies & Pastimes</li>
          <ol type="a">
            <li>Pub Games</li>
            <li>General Hobbies and Pastimes</li>
            <li>Posh Twats’ Hobbies (PTH)</li>
          </ol>
          <li>Fighting</li>
          <ol type="a">
            <li>Weapon Free</li>
            <li>With Weapons</li>
          </ol>
          <li>Not fit for classification</li>
        </ol>
      </main>
    </Layout>
  );
};

export default Classifications;
