import getRewardPointsForThreeMonths from "./getRewardPointsForThreeMonths.js";
import getTotalRewardPointsOverThreeMonths from "./getTotalRewardPointsOverThreeMonths.js";

const getRewardPointsStats = (customer) => {
    const pointsInLastThreeMonths = getRewardPointsForThreeMonths(customer.transactions);
    const totalPoints = getTotalRewardPointsOverThreeMonths(pointsInLastThreeMonths);
    return { totalPoints, monthlyPoints: pointsInLastThreeMonths };
};

export default getRewardPointsStats;