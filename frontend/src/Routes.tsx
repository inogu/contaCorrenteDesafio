import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Extrato from "./pages/Extrato";
import Deposito from "./pages/Deposito";
import Pagamento from "./pages/Pagamento";
import Resgate from "./pages/Resgate";
import Home from "./pages/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/extrato">
      <Extrato />
    </Route>
    <Route path="/deposito">
      <Deposito />
    </Route>
    <Route path="/pagamento">
      <Pagamento />
    </Route>
    <Route path="/resgate">
      <Resgate />
    </Route>
  </Switch>
);

export default Routes;
