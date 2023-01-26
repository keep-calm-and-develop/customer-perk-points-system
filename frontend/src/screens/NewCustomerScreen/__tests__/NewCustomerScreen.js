import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { API_SERVICES } from "../../../constants";
import NewCustomerScreen from "../index";

afterEach(cleanup);

describe('<NewCustomerScreen />', () => {
    it('should render title "new customer"', async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <NewCustomerScreen />
                </BrowserRouter>
            );
        });
        const allCustomersText = screen.getByText(/new customer/i);
        expect(allCustomersText).toBeInTheDocument();
    });
    it('should match snapshot', async () => {
        let newCustomerScreen;
        
        await act(() => {
            newCustomerScreen = render(
                <BrowserRouter>
                    <NewCustomerScreen />
                </BrowserRouter>
            );
        });
        expect(newCustomerScreen).toMatchSnapshot();
    });
    it('should update submit button state and correct value in input on change', async () => {
        let getByTestId;
        await act(() => {
            const newCustomerScreen = render(
                <BrowserRouter>
                    <NewCustomerScreen />
                </BrowserRouter>
            );
            getByTestId = newCustomerScreen.getByTestId;
        });

        const input = getByTestId(/name-input/);
        const submitButton = getByTestId(/submit-button/);
        expect(submitButton).toBeDisabled();
        expect(input.value).toBe("");

        fireEvent.change(input, {target: { value: 'New User' } } );

        expect(submitButton).toBeEnabled();
        expect(input.value).toBe("New User");
    });
    it('should render successful message, add purchase and get reward points links for successful API response', async () => {
        const mockAxios = new MockAdapter(axios);
        const mockCustomerID = '1234';
        const mockData = { customerID: mockCustomerID };
        const url = API_SERVICES.ADD_CUSTOMER;
        mockAxios.onPost(url).reply(200, mockData);

        let newCustomerScreen;
        await act(() => {
            newCustomerScreen = render(
                <BrowserRouter>
                    <NewCustomerScreen />
                </BrowserRouter>
            );
        });

        const { getByTestId, getByText } = newCustomerScreen;
        const input = getByTestId(/name-input/);
        const submitButton = getByTestId(/submit-button/);
        expect(submitButton).toBeDisabled();
        expect(input.value).toBe("");

        fireEvent.change(input, {target: { value: 'NewUser' } } );

        expect(submitButton).toBeEnabled();
        expect(input.value).toBe("NewUser");

        fireEvent.click(submitButton, {
            preventDefault: () => {},
            stopPropagation: () => {},
        });
        expect(submitButton).toBeDisabled();
        expect(submitButton.textContent).toBe('Creating...');

        await act(() => {});

        expect(submitButton).toBeEnabled();
        expect(submitButton.textContent).toBe('Add Customer');
        
        const successfulMessage = getByText(/Customer created successfully/i);
        expect(successfulMessage).toBeInTheDocument();

        const addPurchaseAnchor = getByTestId(/add-purchase-link/);
        const getRewardPointsAnchor = getByTestId(/get-reward-points-link/);
        expect(addPurchaseAnchor.href).toBe('http://localhost/1234/new-transaction?name=NewUser');
        expect(getRewardPointsAnchor).toBeInTheDocument();
    });
    it('should render error message for failed API response', async () => {
        const mockAxios = new MockAdapter(axios);
        const mockData = { message: 'Internal Server Error' };
        const url = API_SERVICES.ADD_CUSTOMER;
        mockAxios.onPost(url).reply(500, mockData);

        let newCustomerScreen;
        await act(() => {
            newCustomerScreen = render(
                <BrowserRouter>
                    <NewCustomerScreen />
                </BrowserRouter>
            );
        });

        const { getByTestId, getByText } = newCustomerScreen;
        const input = getByTestId(/name-input/);
        const submitButton = getByTestId(/submit-button/);
        expect(submitButton).toBeDisabled();
        expect(input.value).toBe("");

        fireEvent.change(input, {target: { value: 'NewUser' } } );

        expect(submitButton).toBeEnabled();
        expect(input.value).toBe("NewUser");

        fireEvent.click(submitButton, {
            preventDefault: () => {},
            stopPropagation: () => {},
        });
        expect(submitButton).toBeDisabled();
        expect(submitButton.textContent).toBe('Creating...');

        await act(() => {});

        expect(submitButton).toBeEnabled();
        expect(submitButton.textContent).toBe('Add Customer');

        const errorMessage = getByText(/Internal Server Error/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
