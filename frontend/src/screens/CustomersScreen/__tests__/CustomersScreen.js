import { cleanup, render, screen } from "@testing-library/react";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import CustomersScreen from "..";
import { API_SERVICES } from "../../../constants";
import { MOCK_CUSTOMERS } from "../../../mockData";

afterEach(cleanup);

describe('<CustomersScreen/>', () => {
    let mockAxios;
    const url = API_SERVICES.GET_CUSTOMERS;
    beforeEach(() => {
        mockAxios = new MockAdapter(axios);
    });
    it('Should match snapshot', async () => {
        mockAxios.onGet(url).reply(200, { customers: [] });
        let customersScreen;
        await act(() => {
            customersScreen = render(
                <BrowserRouter>
                    <CustomersScreen />
                </BrowserRouter>
            );
        });
        expect(customersScreen).toMatchSnapshot();
    });

    it('should render text 0 customers', async () => {
        mockAxios.onGet(url).reply(200, { customers: [] });
        await act(() => {
            render(
                <BrowserRouter>
                    <CustomersScreen />
                </BrowserRouter>
            );
        });
        const text = screen.getByText(/0 customers/i);
        expect(text).toBeInTheDocument();
    });

    it('should render text all customers and match snapshot for 2 customers response', async () => {
        mockAxios.onGet(url).reply(200, { customers: MOCK_CUSTOMERS });
        let customersScreen;
        await act(() => {
            customersScreen = render(
                <BrowserRouter>
                    <CustomersScreen />
                </BrowserRouter>
            );
        });
        const text = screen.getByText(/all customers/i);
        expect(text).toBeInTheDocument();
        const user1Text = screen.getByText(/user1/i);
        expect(user1Text).toBeInTheDocument();
        const user2Text = screen.getByText(/user2/i);
        expect(user2Text).toBeInTheDocument();
        expect(customersScreen).toMatchSnapshot();
    });
});