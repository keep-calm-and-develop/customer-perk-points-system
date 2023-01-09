import calculateRewardPoints from "../calculateRewardPoints.js";
import { API_RESPONSE_CODES, FIXED_DECIMAL_POSITIONS } from "../constants.js";
import { database as db } from "../index.js";

const addTransaction = async (req, res) => {
    try {
        const { customerName, customerID } = req.body;

        await db.read();
        db.data = db.data || { customers: [] };

        const customer = db.data.customers.find((customer) => (customer.name === customerName || customer.customerID === customerID));
        if (!customer) {
            res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: `Customer ${customerName} Not found` });
            return;
        }

        const { amount } = req.body;
        if (typeof amount !== "number") {
            res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: "Amount must be number" });
            return;
        }
        if (isNaN(amount)) {
            res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: "Amount should not be not a number (NaN)" });
            return;
        }

        const rewardPoints = calculateRewardPoints(amount.toFixed(FIXED_DECIMAL_POSITIONS));

        customer.transactions.push({
            amount,
            rewardPoints,
            timestamp: new Date().getTime(),
        });

        await db.write();
        res.status(API_RESPONSE_CODES.SUCCESS).send({ message: "Transaction Added Successfully", rewardPoints });
    } catch (error) {
        res.status(API_RESPONSE_CODES.SERVER_ERROR).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default addTransaction;