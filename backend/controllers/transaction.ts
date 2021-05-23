import { TipoTransacao } from "../enums/TipoTransacao";
import { ITransaction } from "../types/ITransaction";
import {
  connectDatabase,
  getAllTransactions,
  getTransactionsByDate,
  insertTransaction,
} from "../util/database";

const taxaSelicDiaria = 0.000092;

exports.buscaRendimentoDia = async () => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    throw new Error(error);
  }

  try {
    const documents = await getTransactionsByDate(client, "transactions");
    return documents;
  } catch (error) {
    throw new Error(error);
  }
};

exports.inserirRendimento = async () => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    throw new Error(error);
  }

  try {
    const transactions = await getAllTransactions(client, "transactions", {
      _id: -1,
    });

    let valorSaldo = transactions.reduce(function (
      prev: number,
      cur: ITransaction
    ) {
      return prev + cur.value;
    },
    0);

    const result = await insertTransaction(client, "transactions", {
      type: 5,
      datetime: new Date(),
      destinyAccount: "",
      value: valorSaldo * taxaSelicDiaria,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

exports.extrato = async (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { message?: string; transactions?: any }): void;
        new (): any;
      };
    };
  },
  next: any
) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({
      message: "Connecting to the database failed!" + error.message,
    });
    return;
  }

  try {
    const documents = await getAllTransactions(client, "transactions", {
      _id: -1,
    });
    res.status(200).json({ transactions: documents });
  } catch (error) {
    res.status(500).json({ message: "Falha na busca do extrato." });
  }
};

exports.insertTransaction = async (
  req: { body: ITransaction },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { message: string; transaction?: ITransaction }): void;
        new (): any;
      };
    };
  },
  next: any
) => {
  const transaction: ITransaction = req.body;
  if (!transaction.datetime) transaction.datetime = new Date();

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  let result;

  try {
    if (
      (transaction.type === TipoTransacao.Pagamento ||
        transaction.type === TipoTransacao.Resgate) &&
      !transaction.destinyAccount
    ) {
      res.status(500).json({ message: "Conta de destino não informada!" });
    } else {
      result = await insertTransaction(client, "transactions", transaction);
      res
        .status(201)
        .json({ message: "Transação inserida", transaction: transaction });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Falha na inserção da transação! ${error}` });
  }
};
