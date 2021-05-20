import { Header } from "../../styles/styled";
import Button from "../ui/button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Extrato from "../../pages/Extrato";
import Deposito from "../../pages/Deposito";
import Pagamento from "../../pages/Pagamento";
import Resgate from "../../pages/Resgate";

const MainHeader = () => {
  let history = useHistory();

  return (
    <Router>
      <Header>
        <Button
          onClick={() => {
            history.push("/extrato");
          }}
        >
          Extrato
        </Button>
        <Button
          onClick={() => {
            history.push("/deposito");
          }}
        >
          Depósito
        </Button>
        <Button
          onClick={() => {
            history.push("/pagamento");
          }}
        >
          Pagamento
        </Button>
        <Button
          onClick={() => {
            history.push("/resgate");
          }}
        >
          Resgate
        </Button>

        <Switch>
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
      </Header>
    </Router>
  );
};

export default MainHeader;
