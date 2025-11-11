import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Menu from "./ui/Menu";
import List from "./ui/List";
import StateContextProvider from "./contexts/StateContextProvider";

const AppContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1440px;
  padding: 1rem 0;
`;
function App() {
  return (
    <StateContextProvider>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <Menu />
        <List />
      </AppContainer>
    </StateContextProvider>
  );
}

export default App;
