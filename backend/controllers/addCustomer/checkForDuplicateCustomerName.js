import { API_RESPONSE_CODES } from "../../constants.js";
import { database as db } from "../../index.js";
import findCustomerFromDB from "./findCustomerFromDB.js";

const checkForDuplicateCustomerName = async ({ req, res }) => {
    const { name } = req.body;
    await db.read();
    db.data = db.data || { customers: [] };
    if (findCustomerFromDB({ customersList: db.data.customers, customerName: name })) {
        res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: `Customer already exists with the name ${name}` });
        return true;
    }
    return false;
};

export default checkForDuplicateCustomerName;
