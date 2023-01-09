import { nanoid } from "nanoid";
import { database as db } from "../index.js";

const addCustomer = async (req, res) => {
    try {
        const { name } = req.body;
        await db.read();
        db.data = db.data || { customers: [] };

        if (db.data.customers.find((customer) => customer.name === name)) {
            res.status(400).send({ message: `Customer already exists with the name ${name}` });
            return;
        }

        const customerID = nanoid(4);
        db.data.customers.push({ name, customerID, transactions: [] });
        await db.write();

        res.status(200).send({ customerID });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default addCustomer;