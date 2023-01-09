
const addCustomer = (req, res) => {
    const { name } = req.body;
    // customer
    // res.status(400).send(`Customer already exists with a name ${name}`);

    res.status(200).send(`Added Customer with ID ${name}`);
};

export default addCustomer;