import { useLocation } from "react-router-dom";
import { Container, GlobalStyle } from "./appSC";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Switch, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";
import { AdminHomePage } from "./pages/adminHome/AdminHomePage";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      <GlobalStyle />
      {pathname.startsWith("/admin") && <Topbar />}
      <Container id="Container">
        {pathname.startsWith("/admin") && <Sidebar />}
        <Switch>
          <Route path="/admin/" exact component={AdminHomePage} />
          <Route path="/admin/users" exact component={UserList} />
          <Route path="/admin/newUser" exact component={NewUser} />
          <Route
            path="/admin/products"
            exact
            component={ProductList}
          />
          <Route
            path="/admin/newProduct"
            exact
            component={NewProduct}
          />
          <Route path="/admin/users/:id" exact component={User} />
          <Route
            path="/admin/products/:id"
            exact
            component={Product}
          />
          {/* <HomePage /> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
