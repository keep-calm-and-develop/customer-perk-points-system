const getRewardPoints = (req, res) => {
    // const { customerID } = req.params;
    // Customer not found
    // res.status(400).send(`Customer ${customerID} Not found`);

    // get transactions
    const transactions = [];

    const totalRewardPoints = transactions.reduce((sum, txn) => {
        return sum + txn.rewardPoints;
    }, 0);

    res.send({ points: totalRewardPoints });
};

export default getRewardPoints;