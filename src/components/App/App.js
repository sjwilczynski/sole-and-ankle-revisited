import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { QUERIES } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <ThemeProvider theme={{ queries: QUERIES }}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    padding: 48px 32px;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default App;
