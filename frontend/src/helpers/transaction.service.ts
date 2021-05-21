import axios from "axios";
import { ITransaction } from "../types/ITransaction";

const urlTransaction = axios.create({
  baseURL: `http://localhost:3001/`,
});

export const sendTransactionData = async (transactionDetails: ITransaction) => {
  const response = await urlTransaction.post(
    "/insertTransaction",
    transactionDetails
  );

  const data = await response.data;

  if (!response.status) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export const getAllTransactions = async () => {
  const response = await urlTransaction.get("/extrato");
  return response.data.transactions;
};
