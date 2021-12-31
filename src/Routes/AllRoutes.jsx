import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";

function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <h1>Cart</h1>
      </Route>
    </Switch>
  );
}

export default AllRoutes;
