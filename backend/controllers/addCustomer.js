import { nanoid } from "nanoid";
import { API_RESPONSE_CODES, NANO_ID_SIZE } from "../constants.js";
import { database as db } from "../index.js";

const addCustomer = async (req, res) => {
    try {
        const { name } = req.body;
        await db.read();
        db.data = db.data || { customers: [] };

        if (db.data.customers.find((customer) => customer.name === name)) {
            res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: `Customer already exists with the name ${name}` });
            return;
        }

        const customerID = nanoid(NANO_ID_SIZE);
        db.data.customers.push({ name, customerID, transactions: [] });
        await db.write();

        res.status(API_RESPONSE_CODES.SUCCESS).send({ customerID });
    } catch (error) {
        res.status(API_RESPONSE_CODES.SERVER_ERROR).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default addCustomer;