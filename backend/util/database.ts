const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://inogu:KNpwITM4bav7hOCZ@cluster0.v5gnb.mongodb.net/readController?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertTransaction(client, collection, transaction) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(transaction);

  return result;
}

export async function getAllTransactions(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
