import { API_RESPONSE_CODES } from "../../constants.js";
import { database as db } from "../../index.js";
import findCustomerFromDB from "./findCustomerFromDB.js";

const checkIfCustomerExists = async ({ req, res }) => {
    await db.read();
    const { customerName, customerID } = req.body;

    const customer = findCustomerFromDB({
        customersList: db.data.customers ?? [],
        customerName,
        customerID,
    });

    if (!customer) {
        res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: `Customer ${customerName} Not found` });
        return null;
    }
    return customer;
};

export default checkIfCustomerExists;
