import { Header } from "../../styles/styled";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";

const MainHeader = () => {
  let history = useHistory();

  return (
    <Router>
      <Header>
        <Button
          variant="contained"
          color="default"
          startIcon={<FaFileAlt />}
          onClick={() => {
            history.push("/extrato");
          }}
        >
          Extrato
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<GiPayMoney />}
          onClick={() => {
            history.push("/deposito");
          }}
        >
          Depósito
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<GiTakeMyMoney />}
          onClick={() => {
            history.push("/pagamento");
          }}
        >
          Pagamento
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<GiReceiveMoney />}
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
