import { ITransaction } from "../types/ITransaction";
import { TipoTransacao } from "../enums/TipoTransacao";

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://inogu:KV7PbrVJDEsofnPs@cluster0.v5gnb.mongodb.net/desafioWarren?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertTransaction(
  client: { db: () => any },
  collection: string,
  transaction: ITransaction
) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(transaction);

  return result;
}

export async function getAllTransactions(
  client: { db: () => any },
  collection: string,
  sort: { _id: number }
) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

export async function getTransactionsByDate(
  client: { db: () => any },
  collection: string
) {
  const db = client.db();

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const documents = await db
    .collection(collection)
    .find({
      datetime: { $gte: today, $lt: tomorrow },
      type: TipoTransacao.Rendimento,
    })
    .toArray();

  return documents;
}
