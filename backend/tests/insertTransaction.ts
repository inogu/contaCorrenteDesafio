const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const transactionController = require("../controllers/transaction.ts");

const expect = require("chai");

describe("Deposito", function () {
  this.timeout(5000);
  before((done) => {
    const client = MongoClient.connect(
      "mongodb+srv://inogu:@password@cluster0.v5gnb.mongodb.net/desafioWarren?retryWrites=true&w=majority"
    ).then(() => {
      done();
    });
  });

  beforeEach(function () {});

  afterEach(function () {});

  it("deve criar um deposito", function (done) {
    const req = {
      body: {
        type: "deposito",
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

    const result = transactionController
      .insertTransaction(req, res, () => {})
      .then(() => {
        expect(result).to.have.property("transaction");
        expect(result.transaction).to.have.length(1);
        done();
      });
  });

  after(function (done) {
    done();
  });
});
