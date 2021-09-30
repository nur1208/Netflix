import { useLocation } from "react-router-dom";
import { Container, GlobalStyle } from "./appSC";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";
import { AdminHomePage } from "./pages/adminHome/AdminHomePage";
import { HomePage } from "./pages/home/HomePage";
import { Watch } from "./pages/watch/Watch";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/register/login/Login";

function App() {
  const { pathname } = useLocation();
  // TODO move if the user exit stuff out of here
  const isForAdmin = pathname.startsWith("/admin");
  const user = true;
  return (
    <div>
      <GlobalStyle />
      {isForAdmin && <Topbar />}
      <Container id="Container" isForAdmin={isForAdmin}>
        {isForAdmin && <Sidebar />}
        <Switch>
          <Route path="/" exact>
            {user ? <HomePage /> : <Redirect to="/register" />}
          </Route>
          <Route path="/movies">
            {user ? (
              <HomePage type="movie" />
            ) : (
              <Redirect to="/register" />
            )}
          </Route>

          <Route path="/series">
            <HomePage type="Series" />
          </Route>

          <Route path="/" exact component={HomePage} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
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
