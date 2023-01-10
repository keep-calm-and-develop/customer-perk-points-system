
export default function subtractMonths(months) {
    const currentDate = new Date();
    const newDate = new Date();
    newDate.setMonth(currentDate.getMonth() - months);
    return newDate;
}
