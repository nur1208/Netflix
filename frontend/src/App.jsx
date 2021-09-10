import { Container, GlobalStyle } from "./appSC";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Topbar />
      <Container id="Container">
        <Sidebar />
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
