import { Container, GlobalStyle, OtherContainer } from "./appSC";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Topbar />
      <Container id="Container">
        <Sidebar />
        <OtherContainer>other</OtherContainer>
      </Container>
    </div>
  );
}

export default App;
