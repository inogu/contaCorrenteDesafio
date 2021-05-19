import { ITransaction } from "../types/ITransaction";

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://inogu:@password@cluster0.v5gnb.mongodb.net/desafioWarren?retryWrites=true&w=majority"
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
