import { API_RESPONSE_CODES, FIXED_DECIMAL_POSITIONS, POINTS_EXPIRY_DAYS } from "../constants.js";
import { database as db } from "../index.js";

const getRewardPoints = async (req, res) => {
    try {
        const { customerName } = req.body;
        await db.read();
        db.data = db.data || { customers: [] };

        const customer = db.data.customers.find((customer) => customer.name === customerName);
        if (!customer) {
            res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: `Customer ${customerName} Not found` });
            return;
        }

        let allowedDate = new Date();
        allowedDate.setDate(allowedDate - POINTS_EXPIRY_DAYS);
        const allowedTimeStamp = allowedDate.getTime();
        const transactions = customer.transactions.filter(({ timestamp }) => {
            return timestamp >= allowedTimeStamp;
        });

        const totalRewardPoints = transactions.reduce((sum, txn) => {
            return sum + Number(txn.rewardPoints);
        }, 0);

        res.send({ points: totalRewardPoints.toFixed(FIXED_DECIMAL_POSITIONS) });
    } catch (error) {
        res.status(API_RESPONSE_CODES.SERVER_ERROR).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default getRewardPoints;