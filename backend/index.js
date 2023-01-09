import bodyParser from "body-parser";
import express from "express";
import logger from "morgan";
import addCustomer from "./controllers/addCustomer.js";
import addTransaction from "./controllers/addTransaction.js";
import getCustomers from "./controllers/getCustomers.js";
import getRewardPoints from "./controllers/getRewardPoints.js";

const app = express();
const PORT = 3080;

// parsers
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// logger
app.use(logger("tiny"));

// APIs
app.get("/api/customers", getCustomers);

app.get("/api/customer/:customerID/reward-points/", getRewardPoints);

app.post("/api/customer", addCustomer);

app.post("/api/customer/:customerID/transaction", addTransaction);

// error handling
// assume 404 since no middleware responded
app.use(function(req, res){
    res.status(404).send("404", { url: req.originalUrl });
});

app.listen(PORT, () => {
    console.log(`Reward points system API Server listening on port ${PORT}`);
});