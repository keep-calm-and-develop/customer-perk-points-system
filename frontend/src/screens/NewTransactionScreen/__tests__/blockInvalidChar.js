import blockInvalidChar from "../blockInvalidChar";

describe('blockInvalidChar', () => {
    // negative cases
    it('Should call preventDefault for key e', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: 'e',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    it('Should call preventDefault for key E', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: 'E',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    it('Should call preventDefault for key +', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: '+',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    it('Should call preventDefault for key -', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: '-',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    // positive cases
    it('Should not call preventDefault for key 1', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        const result = blockInvalidChar({
            ...MOCK_EVENT,
            key: '1',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(0);
        expect(result).toBe(false);
        
    });
    it('Should not call preventDefault for key 9', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        const result = blockInvalidChar({
            ...MOCK_EVENT,
            key: '9',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(0);
        expect(result).toBe(false);
    });
});