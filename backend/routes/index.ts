const express = require("express");

const transactionController = require("../controllers/transaction");

const router = express.Router();

router.get("/extrato", transactionController.extrato);

router.post("/insertTransaction", transactionController.insertTransaction);

export default router;
