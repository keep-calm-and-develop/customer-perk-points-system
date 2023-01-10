import { API_RESPONSE_CODES } from "../../constants.js";
import { database as db } from "../../index.js";
import createCustomer from "./createCustomer.js";

const writeNewCustomerToDB = async ({ req, res }) => {
    const { name } = req.body;
    
    await db.read();
    const newCustomer = createCustomer({ name });
    db.data.customers.push(newCustomer);
    await db.write();

    res.status(API_RESPONSE_CODES.SUCCESS).send({ customerID: newCustomer.customerID });
};

export default writeNewCustomerToDB;
