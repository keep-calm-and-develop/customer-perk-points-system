import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { API_SERVICES } from "../../../constants";
import NewTransactionScreen from "../index";

afterEach(cleanup);

describe('<NewTransactionScreen />', () => {
    it('should render title new customer', async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <NewTransactionScreen />
                </BrowserRouter>
            );
        });
        const allCustomersText = screen.getByText(/add transaction/i);
        expect(allCustomersText).toBeInTheDocument();
    });
    it('should match snapshot', async () => {
        let newTransactionScreen;

        await act(() => {
            newTransactionScreen = render(
                <BrowserRouter>
                    <NewTransactionScreen />
                </BrowserRouter>
            );
        });
        expect(newTransactionScreen).toMatchSnapshot();
    });
    it('should update submit button state and correct value in input on change', async () => {
        let getByTestId;
        await act(() => {
            const newTransactionScreen = render(
                <BrowserRouter>
                    <NewTransactionScreen />
                </BrowserRouter>
            );
            getByTestId = newTransactionScreen.getByTestId;
        });

        const input = getByTestId(/amount-input/);
        const submitButton = getByTestId(/submit-button/);
        expect(submitButton).toBeDisabled();
        expect(input.value).toBe("");

        fireEvent.change(input, {target: { value: '120' } } );

        expect(submitButton).toBeEnabled();
        expect(input.value).toBe('120');
    });
    it('should render successful message for successful API response', async () => {
        const mockAxios = new MockAdapter(axios);
        const mockRewardPoints = 90;
        const mockData = { rewardPoints: mockRewardPoints };
        const url = API_SERVICES.ADD_TRANSACTION;
        mockAxios.onPost(url).reply(200, mockData);

        let newTransactionScreen;
        await act(() => {
            newTransactionScreen = render(
                <BrowserRouter>
                    <NewTransactionScreen />
                </BrowserRouter>
            );
        });

        const { getByTestId, getByText } = newTransactionScreen;
        const input = getByTestId(/amount-input/);
        const submitButton = getByTestId(/submit-button/);
        expect(submitButton).toBeDisabled();
        expect(input.value).toBe("");

        fireEvent.change(input, {target: { value: '120' } } );

        expect(submitButton).toBeEnabled();
        expect(input.value).toBe('120');

        fireEvent.click(submitButton, {
            preventDefault: () => {},
            stopPropagation: () => {},
        });
        expect(submitButton).toBeDisabled();
        expect(submitButton.textContent).toBe('Saving...');

        await act(() => {});

        expect(submitButton).toBeEnabled();
        expect(submitButton.textContent).toBe('Save Transaction');
        
        const successfulMessage = getByText(/Purchase Added Successfully/i);
        expect(successfulMessage).toBeInTheDocument();
    });
    it('should render error message for failed API response', async () => {
        const mockAxios = new MockAdapter(axios);
        const mockData = { message: 'Internal Server Error' };
        const url = API_SERVICES.ADD_TRANSACTION;
        mockAxios.onPost(url).reply(500, mockData);

        let newTransactionScreen;
        await act(() => {
            newTransactionScreen = render(
                <BrowserRouter>
                    <NewTransactionScreen />
                </BrowserRouter>
            );
        });

        const { getByTestId, getByText } = newTransactionScreen;
        const input = getByTestId(/amount-input/);
        const submitButton = getByTestId(/submit-button/);
        expect(submitButton).toBeDisabled();
        expect(input.value).toBe("");

        fireEvent.change(input, {target: { value: '120' } } );

        expect(submitButton).toBeEnabled();
        expect(input.value).toBe('120');

        fireEvent.click(submitButton, {
            preventDefault: () => {},
            stopPropagation: () => {},
        });
        expect(submitButton).toBeDisabled();
        expect(submitButton.textContent).toBe('Saving...');

        await act(() => {});

        expect(submitButton).toBeEnabled();
        expect(submitButton.textContent).toBe('Save Transaction');
        
        const errorMessage = getByText(/Internal Server Error/i);
        expect(errorMessage).toBeInTheDocument();
    });
});