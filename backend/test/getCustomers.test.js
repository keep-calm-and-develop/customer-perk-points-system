import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

chai.use(chaiHttp);

describe("GET /api/customers", () => {
    it("it return 1 customer", (done) => {
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
});