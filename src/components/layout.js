import React from "react";
import { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
      margin-left: 10px;
  }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      <Link to="/">Home</Link>
      <Link to="/intro">Introduction</Link>
      <Link to="/committee">Committee</Link>
      <Link to="/sic">SIC</Link>
      <Link to="/dissclaimer">Diss-claimer</Link>
      <Link to="/classifications">Classifications</Link>
      {children}
    </React.Fragment>
  );
}
