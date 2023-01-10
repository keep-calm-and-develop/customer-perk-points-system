import { endOfMonth, isAfter, isBefore, startOfMonth, subMonths } from "date-fns";

const getRewardPointsPerMonth = ({
    allTransactions, monthIndex, currentDateTimestamp,
}) => {
    return allTransactions
        .filter((transaction) => {
            const txnDate = new Date(transaction.timestamp);
            return (
                isAfter(txnDate, startOfMonth(subMonths(currentDateTimestamp, monthIndex)))
                &&
                isBefore(txnDate, endOfMonth(subMonths(currentDateTimestamp, monthIndex)))
            );
        })
        .reduce((sum, txn) => {
            return sum + Number(txn.rewardPoints);
        }, 0);
};

export default getRewardPointsPerMonth;
