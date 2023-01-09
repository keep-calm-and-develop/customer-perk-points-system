import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import addCustomer from "./controllers/addCustomer.js";
import addTransaction from "./controllers/addTransaction.js";
import getCustomers from "./controllers/getCustomers.js";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// setting up low db configuration
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);

export const database = new Low(adapter);

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

// APIs
app.get("/api/customers", getCustomers);

app.post("/api/customer", addCustomer);

app.post("/api/customer/transaction", addTransaction);

// error handling
// assume 404 since no middleware responded
app.use(function(req, res){
    res.status(404).send("404", { url: req.originalUrl });
});

app.listen(PORT, () => {
    console.log(`Reward points system API Server listening on port ${PORT}`);
});
