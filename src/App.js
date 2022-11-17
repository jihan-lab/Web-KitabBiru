import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  CategoriesPage,
  Home,
  ListModulePage,
  Login,
  Module,
  Register,
} from "./pages";

import "./assets/scss/style.scss";
// import "./assets/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
        <Route path="/listModule">
          <ListModulePage />
        </Route>
        <Route path="/module">
          <Module />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
