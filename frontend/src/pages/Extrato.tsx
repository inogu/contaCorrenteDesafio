import React, { useEffect, useState } from "react";
import * as S from "../styles/styled";
import Layout from "../components/layout/layout";
import { ITransactionGrid } from "../types/ITransactionGrid";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { getAllTransactions } from "../helpers/transaction.service";
import { TipoTransacao } from "../enums/TipoTransacao";

function Extrato() {
  const [transactions, setTransactions] = useState<ITransactionGrid[]>([]);
  const [loadedData, setLoadedData] = useState(false);

  const columns: GridColDef[] = [
    { field: "datetime", headerName: "Data", width: 200 },
    { field: "type", headerName: "Tipo de transação", width: 200 },
    { field: "value", headerName: "Valor", width: 150 },
    { field: "destinyAccount", headerName: "Conta destino", width: 250 },
  ];

  useEffect(() => {
    const getTransactions = async () => {
      const response = await getAllTransactions();
      if (response) {
        if (response.length > 0) {
          let valorSaldo = response.reduce(function (
            prev: number,
            cur: ITransactionGrid
          ) {
            return prev + cur.value;
          },
          0);

          response.unshift({
            _id: 1,
            type: TipoTransacao.Saldo,
            destinyAccount: "",
            value: valorSaldo,
            datetime: new Date(),
          });
          const transactions: ITransactionGrid[] = response.map(
            (t: ITransactionGrid) => ({
              ...t,
              type:
                t.type === TipoTransacao.Deposito
                  ? "Depósito"
                  : t.type === TipoTransacao.Pagamento
                  ? "Pagamento"
                  : t.type === TipoTransacao.Resgate
                  ? "Resgate"
                  : "Saldo atual",
              value: "R$ " + t.value.toLocaleString("pt-BR"),
              datetime: new Date(t.datetime).toLocaleString("pt-BR"),
              id: t._id,
            })
          );
          setTransactions(transactions);
        }
        setLoadedData(true);
      }
    };
    if (!loadedData) getTransactions();
  }, [loadedData]);

  return (
    <Layout>
      <S.Container>
        <S.GridContainer>
          <S.SubTitle>Extrato</S.SubTitle>
          <br />
          <DataGrid rows={transactions} columns={columns} pageSize={5} />
        </S.GridContainer>
      </S.Container>
    </Layout>
  );
}

export default Extrato;
