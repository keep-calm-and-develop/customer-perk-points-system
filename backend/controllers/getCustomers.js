import { database as db } from "../index.js";

const getCustomers = async (req, res) => {
    // Read data from JSON file, this will set db.data content
    await db.read();

    // // If db.json doesn't exist, db.data will be null
    // // Use the code below to set default data
    db.data = db.data || { customers: [] };

    await db.write();
    res.status(200).send(db.data);
};

export default getCustomers;