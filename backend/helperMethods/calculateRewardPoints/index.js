import { BASE_THRESHOLD, FIXED_DECIMAL_POSITIONS } from "../../constants.js";
import calculatePointsForAboveBaseThreshold from "./calculatePointsForAboveBaseThreshold.js";
import calculatePointsForAboveTopThreshold from "./calculatePointsForAboveTopThreshold.js";

const calculateRewardPoints = (amount) => {
    let points = 0;
    if (amount <= BASE_THRESHOLD) {
        return points;
    }
    points = calculatePointsForAboveBaseThreshold(amount);
    points += calculatePointsForAboveTopThreshold(amount);
    return Number(points.toFixed(FIXED_DECIMAL_POSITIONS));
};

export default calculateRewardPoints;