import subtractMonths from "../subtractMonths";

describe('subtractMonths', () => {
    let currentMonth = null;
    beforeEach(() => {
        currentMonth = new Date().getMonth();
    });
    it('should return correct month after subtracting 1', () => {
        const requiredMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1;
        const resultDate = subtractMonths(1);
        expect(resultDate.getMonth()).toBe(requiredMonth);
    });
    it('should return correct month after subtracting 3', () => {
        const requiredMonth = currentMonth - 1 < 0 ? 9 : currentMonth - 1;;
        const resultDate = subtractMonths(3);
        expect(resultDate.getMonth()).toBe(requiredMonth);
    });
    it('should return correct month after subtracting 12', () => {
        const requiredMonth = currentMonth;
        const resultDate = subtractMonths(12);
        expect(resultDate.getMonth()).toBe(requiredMonth);
    });
});