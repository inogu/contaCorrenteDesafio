import { ITransaction } from "../types/ITransaction";
import {
  connectDatabase,
  getAllTransactions,
  insertTransaction,
} from "../util/database";

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
  transaction.datetime = createDateAsUTC(new Date());

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  let result;

  try {
    switch (transaction.type) {
      case 2:
      case 3:
        if (!transaction.destinyAccount)
          res.status(500).json({ message: "Conta de destino não informada!" });

        break;

      default:
        break;
    }
    result = await insertTransaction(client, "transactions", transaction);
    transaction._id = result.insertedId;
    res
      .status(201)
      .json({ message: "Transação inserida", transaction: transaction });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Falha na inserção da transação! ${error}` });
  }
};
