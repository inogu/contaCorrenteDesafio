var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;

var transactionController = require("../controllers/transaction.ts");

var expect = require("chai").expect;

describe("Pagamento", function () {
  this.timeout(5000);
  it("deve validar pagamento sem conta destino", async (done) => {
    const req = {
      body: {
        type: 2,
        destinyAccount: "",
        value: 205,
      },
    };
    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    try {
      const result = await transactionController.insertTransaction(
        req,
        res,
        () => {}
      );

      if (result) {
        expect(result.message).to.be.equal("Conta de destino não informada!");
      }
    } catch (error) {
      done();
    }
  });

  it("deve criar um pagamento sem decimais", async () => {
    const req = {
      body: {
        type: 2,
        destinyAccount: "conta225",
        value: 100,
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

  it("deve criar um pagamento com decimais", async () => {
    const req = {
      body: {
        type: 2,
        destinyAccount: "conta145",
        value: 305.52,
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
