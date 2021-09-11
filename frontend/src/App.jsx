import { Container, GlobalStyle } from "./appSC";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { HomePage } from "./pages/home/HomePage";
import { Switch, Route } from "react-router-dom";
import { UserList } from "./components/userList/UserList";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Topbar />
      <Container id="Container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={UserList} />
          {/* <HomePage /> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
