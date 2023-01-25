import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { API_SERVICES } from "../../../constants";
import { MOCK_CUSTOMERS } from "../../../mockData";
import useGetCustomers from '../useGetCustomers';

afterEach(cleanup);

describe('useGetCustomers', () => {
    let mockAxios = null;
    beforeEach(() => {
        mockAxios = new MockAdapter(axios);
    });
    it('Should return correct customers and loading state', async () => {
        const mockData = { customers: MOCK_CUSTOMERS };
        const url = API_SERVICES.GET_CUSTOMERS;
        mockAxios.onGet(url).reply(200, mockData);

        const { result, waitForNextUpdate } = renderHook(() => useGetCustomers());

        expect(result.current.customers).toEqual([]);
        expect(result.current.loading).toBeTruthy();

        await waitForNextUpdate();

        expect(result.current.customers.length).toEqual(2);
        expect(result.current.loading).toBeFalsy();
    });

    it('Should return empty customers for string response', async () => {
        const mockData = 'This will throw an error';
        const url = API_SERVICES.GET_CUSTOMERS;
        mockAxios.onGet(url).reply(200, mockData);

        const { result, waitForNextUpdate } = renderHook(() => useGetCustomers());

        expect(result.current.customers).toEqual([]);
        expect(result.current.loading).toBeTruthy();

        await waitForNextUpdate();

        expect(result.current.customers).toEqual([]);
        expect(result.current.loading).toBeFalsy();
    });
});