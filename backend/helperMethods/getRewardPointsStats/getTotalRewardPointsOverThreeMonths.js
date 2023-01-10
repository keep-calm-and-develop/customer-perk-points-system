const getTotalRewardPointsOverThreeMonths = (pointsInLastThreeMonths) => {
    return pointsInLastThreeMonths.reduce((sum, points) => {
        return sum + points;
    }, 0);
};

export default getTotalRewardPointsOverThreeMonths;
