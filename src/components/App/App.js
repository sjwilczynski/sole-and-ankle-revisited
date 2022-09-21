import React from "react";
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from "styled-components/macro";
import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { QUERIES, COLORS } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={{ queries: QUERIES }}>
        <Header />
        <Main>
          <ShoeIndex sortId={sortId} setSortId={setSortId} />
        </Main>
      </ThemeProvider>
    </>
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

const GlobalStyles = createGlobalStyle`
  html {
    --color-white: ${COLORS.white};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary}
  }
`;
