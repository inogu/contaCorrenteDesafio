import { ITransaction } from "../types/ITransaction";

const connectDatabase = require("../util/database");
const getAllTransactions = require("../util/database");
const insertTransaction = require("../util/database");

const express = require("express");
const router = express.Router();

router.get("/extrato", async (req, res, next) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
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
});

router.post("/insertTransaction", async (req, res, next) => {
  const transaction: ITransaction = req.body;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  let result;

  try {
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
});

module.exports = router;
