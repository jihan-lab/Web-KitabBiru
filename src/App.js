import { Button } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages";

import "./assets/scss/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
