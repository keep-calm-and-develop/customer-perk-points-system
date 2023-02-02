import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import addCustomerController from "./controllers/addCustomer/index.js";
import addTransactionController from "./controllers/addTransaction/index.js";
import getCustomersController from "./controllers/getCustomers/index.js";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import initializeDatabase from "./initializeDatabase.js";

// Setting up express server
const app = express();
const PORT = 3080;

// apply middlewares
app.use(cors({
    origin: "*"
}));

// parsers
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// logger
app.use(logger("tiny"));

// setting up low db configuration
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);

export const database = new Low(adapter);

// initialize empty database 
app.use(initializeDatabase);

// APIs
app.get("/api/customers", getCustomersController);

app.post("/api/customer", addCustomerController);

app.post("/api/customer/transaction", addTransactionController);

// error handling
// assume 404 since no middleware responded
app.use(function(req, res){
    res.status(404).send("404", { url: req.originalUrl });
});

app.listen(PORT, () => {
    console.log(`Reward points system API Server listening on port ${PORT}`);
});

export default app;