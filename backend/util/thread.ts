const transactionController = require("../controllers/transaction");

export const rentabilizarConta = async () => {
  try {
    const transactions = await transactionController.buscaRendimentoDia();
    if (transactions) {
      if (transactions.length === 0) transactionController.inserirRendimento();
    }
  } catch (error) {
    console.log(error);
  }
};
