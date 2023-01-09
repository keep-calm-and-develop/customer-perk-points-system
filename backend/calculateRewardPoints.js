import { BASE_MULTIPLIER, BASE_THRESHOLD, FIXED_DECIMAL_POSITIONS, TOP_MULTIPLIER, TOP_THRESHOLD } from "./constants.js";


const calculateRewardPoints = (amount) => {
    let points = 0;
    if (amount < BASE_THRESHOLD) {
        return points;
    }
    points = BASE_THRESHOLD * BASE_MULTIPLIER;
    if (amount >= TOP_THRESHOLD) {
        points += TOP_MULTIPLIER * ((amount - TOP_THRESHOLD) % TOP_THRESHOLD);
    }
    return Number(points.toFixed(FIXED_DECIMAL_POSITIONS));
};

export default calculateRewardPoints;