import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useAmountState from '../useAmountState';

afterEach(cleanup);

describe('useAmountState', () => {
    it('should return 2 parameters', () => {
        const { result } = renderHook(() => useAmountState());
        const [amount, onAmountChange] = result.current;
        expect(amount).toBe('');
        expect(onAmountChange).toBeDefined();
    });
    it('should return correct state', async () => {
        const { result } = renderHook(() => useAmountState());
        const [, onAmountChange] = result.current;
        const mockEvent = {
            currentTarget: {
                value: 'User',
            }
        };
        await act(() => {
            onAmountChange(mockEvent);
        });
        expect(result.current[0]).toBe('User');
    });
    it('should not throw error', async () => {
        const { result } = renderHook(() => useAmountState());
        const [, onAmountChange] = result.current;
        await act(() => {
            onAmountChange();
        });
        expect(result.current[0]).toBe('');
    });
});