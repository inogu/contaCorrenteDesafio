var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;

var transactionController = require("../controllers/transaction.ts");

var expect = require("chai").expect;

describe("Deposito", function () {
  this.timeout(5000);
  it("deve criar um deposito", async () => {
    const req = {
      body: {
        type: 1,
        destinyAccount: "",
        value: 1005,
      },
    };
    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    const result = await transactionController.insertTransaction(
      req,
      res,
      () => {}
    );
    if (result) {
      expect(result).to.have.property("transaction");
      expect(result.transaction).to.have.length(1);
    }
  });

  it("deve criar um deposito com decimais", async () => {
    const req = {
      body: {
        type: 1,
        destinyAccount: "",
        value: 185.64,
      },
    };
    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    const result = await transactionController.insertTransaction(
      req,
      res,
      () => {}
    );
    if (result) {
      expect(result).to.have.property("transaction");
      expect(result.transaction).to.have.length(1);
    }
  });
});
