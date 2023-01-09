import { BASE_MULTIPLIER, BASE_THRESHOLD, TOP_MULTIPLIER, TOP_THRESHOLD } from "./constants.js";


const calculateRewardPoints = (amount) => {
    let points = 0;
    if (amount < BASE_THRESHOLD) {
        return points;
    }
    points = BASE_THRESHOLD * BASE_MULTIPLIER;
    if (amount >= TOP_THRESHOLD) {
        points += TOP_MULTIPLIER * ((amount - BASE_THRESHOLD) % TOP_THRESHOLD);
    }
    return points.toFixed(2);
};

export default calculateRewardPoints;