import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import { API_SERVICES } from "../../../constants";
import useAddNewCustomer from '../useAddNewCustomer';

afterEach(cleanup);

describe('useAddNewCustomer', () => {
    const mockEvent = {
        preventDefault: () => {},
        stopPropagation: () => {},
    };
    let mockAxios = null;
    beforeEach(() => {
        mockAxios = new MockAdapter(axios);
    });

    it('should return customer ID for 200 response', async () => {
        const mockCustomerID = '1234';
        const mockData = { customerID: mockCustomerID };
        const url = API_SERVICES.ADD_CUSTOMER;
        mockAxios.onPost(url).reply(200, mockData);

        const { result, waitForNextUpdate } = renderHook(() => useAddNewCustomer('user'));
        const [{ isSubmitting, errorMessage, customerID }, onSubmit] = result.current;
        expect(isSubmitting).toBe(false);
        expect(errorMessage).toBe('');
        expect(customerID).toBe(null);

        act(() => {
            onSubmit(mockEvent);
        })
        expect(result.current[0].isSubmitting).toBe(true);
        await waitForNextUpdate();
        
        const [newState] = result.current;
        expect(newState.isSubmitting).toBe(false);
        expect(newState.errorMessage).toBe('');
        expect(newState.customerID).toBe(mockCustomerID);
    });

    it('should return error message for 4xx 5xx response', async () => {
        const mockData = { message: 'Internal Server Error' };
        const url = API_SERVICES.ADD_CUSTOMER;
        mockAxios.onPost(url).reply(500, mockData);

        const { result, waitForNextUpdate } = renderHook(() => useAddNewCustomer('user'));
        const [{ isSubmitting, errorMessage, customerID }, onSubmit] = result.current;
        expect(isSubmitting).toBe(false);
        expect(errorMessage).toBe('');
        expect(customerID).toBe(null);

        act(() => {
            onSubmit(mockEvent);
        })
        expect(result.current[0].isSubmitting).toBe(true);
        await waitForNextUpdate();
        
        const [newState] = result.current;
        expect(newState.isSubmitting).toBe(false);
        expect(newState.errorMessage).toBe('Internal Server Error');
        expect(newState.customerID).toBe(null);
    });
});