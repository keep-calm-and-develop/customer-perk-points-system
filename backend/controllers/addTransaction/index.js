import { API_RESPONSE_CODES } from "../../constants.js";
import addTransactionToDB from "./addTransactionToDB.js";
import assertAmountType from "./assertAmountType.js";
import checkIfCustomerExists from "./checkIfCustomerExists.js";

const addTransaction = async (req, res) => {
    try {
        const customer = await checkIfCustomerExists({ req, res });
        if (!customer) {
            return;
        }

        const isValid = assertAmountType({ req, res });
        if (!isValid) {
            return;
        }

        addTransactionToDB({ req, res, customer });
    } catch (error) {
        res.status(API_RESPONSE_CODES.SERVER_ERROR).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default addTransaction;