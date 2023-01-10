import { API_RESPONSE_CODES } from "../../constants.js";
import { database as db } from "../../index.js";
import createTransaction from "./createTransaction.js";

const addTransactionToDB = async ({ req, res, customer }) => {
    const newTransaction = createTransaction({ req });
    customer.transactions.push(newTransaction);
    await db.write();
    res.status(API_RESPONSE_CODES.SUCCESS).send({
        message: "Transaction Added Successfully",
        rewardPoints: newTransaction.rewardPoints,
    });
};

export default addTransactionToDB;
