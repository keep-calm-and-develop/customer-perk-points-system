import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useCustomerNameState from '../useCustomerNameState';

afterEach(cleanup);

describe('useCustomerNameState', () => {
    it('should return 2 parameters', () => {
        const { result } = renderHook(() => useCustomerNameState());
        const [name, onNameChange] = result.current;
        expect(name).toBe('');
        expect(onNameChange).toBeDefined();
    });
    it('should return correct state', async () => {
        const { result } = renderHook(() => useCustomerNameState());
        const [, onNameChange] = result.current;
        const mockEvent = {
            currentTarget: {
                value: 'User',
            }
        };
        await act(() => {
            onNameChange(mockEvent);
        });
        expect(result.current[0]).toBe('User');
    });
    it('should not throw error', async () => {
        const { result } = renderHook(() => useCustomerNameState());
        const [, onNameChange] = result.current;
        await act(() => {
            onNameChange();
        });
        expect(result.current[0]).toBe('');
    });
});