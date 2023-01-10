import { endOfMonth, isAfter, isBefore, startOfMonth, subMonths } from "date-fns";
import { MONTHS } from "./constants.js";

const getRewardPoints = (customer) => {
    const currentDateTimestamp = new Date();
    const monthlyPoints = MONTHS.map((month) => {

        return customer.transactions
            .filter((transaction) => {
                const txnDate = new Date(transaction.timestamp);
                return (
                    isAfter(txnDate, startOfMonth(subMonths(currentDateTimestamp, month)))
                    &&
                    isBefore(txnDate, endOfMonth(subMonths(currentDateTimestamp, month)))
                );
            })
            .reduce((sum, txn) => {
                return sum + Number(txn.rewardPoints);
            }, 0);
    });

    const totalPoints = monthlyPoints.reduce((sum, points) => {
        return sum + points;
    }, 0);

    return { totalPoints, monthlyPoints };
};

export default getRewardPoints;