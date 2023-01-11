import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewTransactionScreen from "../index";

afterEach(cleanup);

describe('<NewTransactionScreen />', () => {
    it('should render title new customer', () => {
        render(
            <BrowserRouter>
                <NewTransactionScreen />
            </BrowserRouter>
        );
        const allCustomersText = screen.getByText(/add transaction/i);
        expect(allCustomersText).toBeInTheDocument();
    });
    it('should match snapshot', () => {
        const newTransactionScreen = render(
            <BrowserRouter>
                <NewTransactionScreen />
            </BrowserRouter>
        );
        expect(newTransactionScreen).toMatchSnapshot();
    });
    it('should update submit button state on input change', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <NewTransactionScreen />
            </BrowserRouter>
        );

        expect(getByTestId(/submit-button/)).toBeDisabled();
        expect(getByTestId(/amount-input/).textContent).toBe("");

        fireEvent.change(getByTestId(/amount-input/), {target: {value: 123 } } );

        expect(getByTestId(/submit-button/)).toBeEnabled();
    });
});
