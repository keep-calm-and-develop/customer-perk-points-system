import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

chai.use(chaiHttp);

describe("GET /api/customers", () => {
    it("it should GET all the books", (done) => {
        chai.request(server)
            .get("/api/customers")
            .end((err, res) => {
                expect(res.body.customers.length).to.equal(1);
                done();
            });
    });
});