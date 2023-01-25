import { MONTHS } from "../../../constants";
import getLastThreeMonths from "../getLastThreeMonths";


describe('getLastThreeMonths', () => {
    let currentMonth = null;
    beforeEach(() => {
        currentMonth = new Date().getMonth();
    });
    it('should give correct last three months', () => {
        const [month1, month2, month3] = getLastThreeMonths();
        expect(month1).toBe(MONTHS[currentMonth]);
        expect(month2).toBe(MONTHS[currentMonth - 1 < 0 ? 11 : currentMonth - 1]);
        expect(month3).toBe(MONTHS[currentMonth - 2 < 0 ? 10 : currentMonth - 2]);
    });
});