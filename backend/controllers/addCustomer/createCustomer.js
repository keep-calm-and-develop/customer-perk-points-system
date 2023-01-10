import { nanoid } from "nanoid";
import { NANO_ID_SIZE } from "../../constants.js";

const createCustomer = ({ name }) => {
    const customerID = nanoid(NANO_ID_SIZE);
    return { name, customerID, transactions: [] };
};

export default createCustomer;
