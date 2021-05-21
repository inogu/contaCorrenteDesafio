import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import * as S from "../styles/styled";
import Button from "../components/ui/button";
import { sendTransactionData } from "../helpers/transaction.service";
import Layout from "../components/layout/layout";
import { useHistory } from "react-router";
import InfoAlert from "../components/ui/messageInfo";
import ErrorAlert from "../components/ui/messageError";
import NumberFormat from "react-number-format";
import { TipoTransacao } from "../enums/TipoTransacao";

interface State {
  enteredContaDestino: string;
  enteredValor: string;
}

function Resgate() {
  const [values, setValues] = React.useState<State>({
    enteredContaDestino: "",
    enteredValor: "",
  });
  const [alertErrorVisible, setAlertErrorVisible] = useState(false);
  const [alertSuccessVisible, setAlertSuccessVisible] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const createDateAsUTC = (date: Date) => {
    return new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      )
    );
  };

  const insertResgate = async () => {
    setRequestStatus("pending");

    if (!values.enteredContaDestino) {
      setMessageError("Informe o código de barras!");
      setAlertErrorVisible(true);
    } else if (!values.enteredValor) {
      setMessageError("Informe o valor!");
      setAlertErrorVisible(true);
    } else {
      try {
        await sendTransactionData({
          type: TipoTransacao.Resgate,
          datetime: createDateAsUTC(new Date()),
          destinyAccount: values.enteredContaDestino,
          value: parseFloat(
            values.enteredValor.replace("R$ ", "").replace(",", ".")
          ),
        });
        setRequestStatus("success");
        setAlertSuccessVisible(true);
        setAlertErrorVisible(false);
        setTimeout(() => {
          history.push("/");
        }, 1500);
      } catch (error) {
        setRequestError(error.message);
        setRequestStatus("error");
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Layout>
      <S.Container>
        <S.FormContainer>
          <S.SubTitle>Novo Resgate</S.SubTitle>
          <S.Row>
            <TextField
              label="Conta destino"
              type="text"
              id="contaDestino"
              name="enteredContaDestino"
              value={values.enteredContaDestino}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth={true}
            />
          </S.Row>
          <br />
          <S.Row>
            <NumberFormat
              customInput={TextField}
              decimalScale={2}
              fixedDecimalScale={true}
              allowNegative={false}
              decimalSeparator=","
              label="Valor"
              value={values.enteredValor}
              onChange={handleChange}
              name="enteredValor"
              id="valor"
              InputLabelProps={{ shrink: true }}
              fullWidth={true}
              prefix={"R$ "}
            />
          </S.Row>
          <br />
          <S.Footer>
            <Button onClick={insertResgate}>Inserir</Button>
          </S.Footer>
          <ErrorAlert message={messageError} visible={alertErrorVisible} />
          <InfoAlert
            message="Resgate realizado com sucesso!"
            visible={alertSuccessVisible}
          />
        </S.FormContainer>
      </S.Container>
    </Layout>
  );
}

export default Resgate;
