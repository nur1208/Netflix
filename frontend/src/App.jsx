import { Container, GlobalStyle } from "./appSC";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { HomePage } from "./pages/home/HomePage";
import { Switch, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";

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
          <Route path="/newUser" exact component={NewUser} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/newProduct" exact component={NewProduct} />
          <Route path="/users/:id" exact component={User} />
          <Route path="/products/:id" exact component={Product} />
          {/* <HomePage /> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
