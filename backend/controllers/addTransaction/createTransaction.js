import { formatISO } from "date-fns";
import { FIXED_DECIMAL_POSITIONS } from "../../constants.js";
import calculateRewardPoints from "../../helperMethods/calculateRewardPoints/index.js";

const createTransaction = ({ req }) => {
    const { amount } = req.body;
    const rewardPoints = calculateRewardPoints(amount.toFixed(FIXED_DECIMAL_POSITIONS));
    return {
        amount,
        rewardPoints,
        timestamp: formatISO(new Date()),
    };
};

export default createTransaction;
