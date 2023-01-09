
const addTransaction = (req, res) => {
    // const { customerID } = req.params;
    // Customer not found
    // res.status(400).send(`Customer ${customerID} Not found`);
    console.log(req.body);
    res.end("Add Transaction");
};

export default addTransaction;