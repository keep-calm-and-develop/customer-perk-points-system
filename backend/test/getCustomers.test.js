import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server, { database } from "../index.js";

chai.use(chaiHttp);

const MOCK_CUSTOMER = {
    "name": "User",
    "customerID": "SDc9",
    "transactions": [
        {
            "amount": 120,
            "rewardPoints": 90,
            "timestamp": "2023-01-09T21:13:13+05:30"
        },
        {
            "amount": 120,
            "rewardPoints": 90,
            "timestamp": "2022-12-09T21:13:13+05:30"
        },
        {
            "amount": 50,
            "rewardPoints": 50,
            "timestamp": "2022-12-09T21:13:13+05:30"
        },
        {
            "amount": 110,
            "rewardPoints": 70,
            "timestamp": "2022-11-09T21:13:13+05:30"
        },
        {
            "amount": 125,
            "rewardPoints": 100,
            "timestamp": "2022-11-09T21:13:13+05:30"
        },
        {
            "amount": 200,
            "rewardPoints": 250,
            "timestamp": "2022-10-09T21:13:13+05:30"
        }
    ]
};

describe("GET /api/customers", () => {
    beforeEach(async () => {
        await database.read();
        database.data = { customers: [MOCK_CUSTOMER] };
        await database.write();
    });
    it("it should return 1 customer", (done) => {
        chai.request(server)
            .get("/api/customers")
            .end((err, res) => {
                expect(res.body.customers.length).to.equal(1);
                done();
            });
    });
    it("it should return customer with required fields", (done) => {
        chai.request(server)
            .get("/api/customers")
            .end((err, res) => {
                expect(res.body.customers.length).to.equal(1);
                const customer = res.body.customers[0];
                expect(customer).to.have.own.property("name");
                expect(customer).to.have.own.property("customerID");
                expect(customer).to.have.own.property("totalPoints");
                expect(customer.monthlyPoints).to.be.an("array");
                expect(customer.monthlyPoints.length).to.equal(3);
                done();
            });
    });

    afterEach(async () => {
        await database.read();
        database.data = { customers: [] };
        await database.write();
    });
});