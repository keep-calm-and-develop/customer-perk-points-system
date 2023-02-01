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
        let requiredMonth = currentMonth - 3;
        if (requiredMonth === -3) {
            requiredMonth = 9;
        } else if (requiredMonth === -2) {
            requiredMonth = 10;
        } else if (requiredMonth === -1) {
            requiredMonth = 11;
        }
        const resultDate = subtractMonths(3);
        expect(resultDate.getMonth()).toBe(requiredMonth);
    });
    it('should return correct month after subtracting 12', () => {
        const requiredMonth = currentMonth;
        const resultDate = subtractMonths(12);
        expect(resultDate.getMonth()).toBe(requiredMonth);
    });
});