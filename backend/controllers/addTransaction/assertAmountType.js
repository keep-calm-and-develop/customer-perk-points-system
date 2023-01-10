import { API_RESPONSE_CODES } from "../../constants.js";

const assertAmountType = ({ req, res }) => {
    const { amount } = req.body;
    if (typeof amount !== "number") {
        res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: "Amount must be number" });
        return false;
    }
    if (isNaN(amount)) {
        res.status(API_RESPONSE_CODES.INVALID_REQUEST).send({ message: "Amount should not be not a number (NaN)" });
        return false;
    }
    return true;
};

export default assertAmountType;
