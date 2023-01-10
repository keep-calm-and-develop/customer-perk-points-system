import getRewardPointsPerMonth from "./getRewardPointsPerMonth.js";

const getRewardPointsForThreeMonths = (allTransactions) => {
    const pointsInLastThreeMonths = [];
    const currentDateTimestamp = new Date();
    let monthIndex = 0;

    while (monthIndex < 3) {
        pointsInLastThreeMonths.push(
            getRewardPointsPerMonth({
                allTransactions,
                monthIndex,
                currentDateTimestamp,
            })
        );
        monthIndex += 1;
    }
    return pointsInLastThreeMonths;
};

export default getRewardPointsForThreeMonths;
