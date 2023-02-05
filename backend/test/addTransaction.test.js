import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server, { database } from "../index.js";

chai.use(chaiHttp);

const MOCK_CUSTOMER = {
    "name": "User",
    "customerID": "1234",
    "transactions": []
};

describe("POST /api/customer/transaction", () => {
    beforeEach(async () => {
        await database.read();
        database.data = { customers: [MOCK_CUSTOMER] };
        await database.write();
    });
    it("it should return correct status and message for unknown customer", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "Unknown",
                customerID: "",
            })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(JSON.parse(res.text).message).to.equal("Customer Unknown not found");
                done();
            });
    });
    it("it should return correct status and message for invalid amount", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "User",
                customerID: "1234",
            })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(JSON.parse(res.text).message).to.equal("Amount must be a number");
                done();
            });
    });
    it("it should add new transaction with 90 reward points for amount 120", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "User",
                customerID: "1234",
                amount: 120,
            })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const customer = database.data.customers[0];
                expect(customer.transactions.length).to.equal(1);
                expect(customer.transactions[0].rewardPoints).to.equal(90);
                done();
            });
    });
    it("it should add new transaction with 50 reward points for amount 100", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "User",
                customerID: "1234",
                amount: 100,
            })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const customer = database.data.customers[0];
                expect(customer.transactions.length).to.equal(1);
                expect(customer.transactions[0].rewardPoints).to.equal(50);
                done();
            });
    });
    it("it should add new transaction with 0 reward points for amount 50", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "User",
                customerID: "1234",
                amount: 50,
            })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const customer = database.data.customers[0];
                expect(customer.transactions.length).to.equal(1);
                expect(customer.transactions[0].rewardPoints).to.equal(0);
                done();
            });
    });
    it("it should add new transaction with 1 reward points for amount 51", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "User",
                customerID: "1234",
                amount: 51,
            })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const customer = database.data.customers[0];
                expect(customer.transactions.length).to.equal(1);
                expect(customer.transactions[0].rewardPoints).to.equal(1);
                done();
            });
    });
    it("it should add new transaction with 52 reward points for amount 101", (done) => {
        chai.request(server)
            .post("/api/customer/transaction")
            .send({
                customerName: "User",
                customerID: "1234",
                amount: 101,
            })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const customer = database.data.customers[0];
                expect(customer.transactions.length).to.equal(1);
                expect(customer.transactions[0].rewardPoints).to.equal(52);
                done();
            });
    });
});