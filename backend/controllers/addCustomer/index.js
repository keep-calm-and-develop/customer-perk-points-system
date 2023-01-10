import { API_RESPONSE_CODES } from "../../constants.js";
import checkForDuplicateCustomerName from "./checkForDuplicateCustomerName.js";
import writeNewCustomerToDB from "./writeNewCustomerToDB.js";

const addCustomerController = async (req, res) => {
    try {
        const isDuplicate = await checkForDuplicateCustomerName({ res, req });
        if (isDuplicate) {
            return;
        }

        writeNewCustomerToDB({ req, res });
    } catch (error) {
        res.status(API_RESPONSE_CODES.SERVER_ERROR).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default addCustomerController;