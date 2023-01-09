import { API_RESPONSE_CODES } from "../constants.js";
import { database as db } from "../index.js";

const getCustomers = async (req, res) => {
    try {
        // Read data from JSON file, this will set db.data content
        await db.read();

        // // If db.json doesn't exist, db.data will be null
        // // Use the code below to set default data
        db.data = db.data || { customers: [] };

        await db.write();
        res.status(API_RESPONSE_CODES.SUCCESS).send(db.data);
    } catch (error) {
        res.status(API_RESPONSE_CODES.SERVER_ERROR).send({ message: "Internal server error" });
        console.log(error);
    }
};

export default getCustomers;