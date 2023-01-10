import { BASE_MULTIPLIER, BASE_THRESHOLD } from "../../constants.js";

const calculatePointsForAboveBaseThreshold = (amount) => {
    // Amount between 50 (BASE_THRESHOLD) and 100 (TOP_THRESHOLD) gets 1 point for each dollar
    return Math.min((amount - BASE_THRESHOLD), BASE_THRESHOLD) * BASE_MULTIPLIER;
};

export default calculatePointsForAboveBaseThreshold;
