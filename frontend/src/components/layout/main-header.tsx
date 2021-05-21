import { Header } from "../../styles/styled";
import Button from "../ui/button";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

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
      </Header>
    </Router>
  );
};

export default MainHeader;
