import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

chai.use(chaiHttp);

describe("POST /api/customer", () => {
    it("it should return customer which was added", (done) => {
        const newCustomerName = "testUser";
        chai.request(server)
            .post("/api/customer")
            .send({ name: newCustomerName })
            .end(() => {
                chai.request(server)
                    .get("/api/customers")
                    .end((err, res) => {
                        const customer = res.body.customers.find(it => it.name === newCustomerName);
                        expect(customer).to.have.own.property("name");
                        expect(customer).to.have.own.property("customerID");
                        expect(customer).to.have.own.property("totalPoints");
                        expect(customer.monthlyPoints).to.be.an("array");
                        expect(customer.monthlyPoints.length).to.equal(3);
                        done();
                    });
            });
    });
    it("it should not allow duplicate name", (done) => {
        const newCustomerName = "testUser";
        chai.request(server)
            .post("/api/customer")
            .send({ name: newCustomerName })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });
});