
export default function subtractMonths(monthsToBeSubtracted) {
    const currentDate = new Date();
    const newDate = new Date();
    newDate.setMonth(currentDate.getMonth() - monthsToBeSubtracted);
    return newDate;
}
