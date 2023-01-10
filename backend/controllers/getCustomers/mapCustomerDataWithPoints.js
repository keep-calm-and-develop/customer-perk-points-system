import getRewardPointsStats from "../../helperMethods/getRewardPointsStats/index.js";

const mapCustomerDataWithPoints = (customer) => {
    const { totalPoints, monthlyPoints } = getRewardPointsStats(customer);
    const { name, customerID } = customer;
    return { name, customerID, totalPoints, monthlyPoints };
};

export default mapCustomerDataWithPoints;
