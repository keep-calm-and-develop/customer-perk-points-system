import { TOP_MULTIPLIER, TOP_THRESHOLD } from "../../constants.js";

const calculatePointsForAboveTopThreshold = (amount) => {
    // Amount above 100 (TOP_THRESHOLD) gets 2 points for each dollar
    if (amount > TOP_THRESHOLD) {
        return (amount - TOP_THRESHOLD) * TOP_MULTIPLIER;
    }
    return 0;
};

export default calculatePointsForAboveTopThreshold;
