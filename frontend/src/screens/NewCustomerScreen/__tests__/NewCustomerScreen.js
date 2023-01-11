import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewCustomerScreen from "../index";

afterEach(cleanup);

describe('<NewCustomerScreen />', () => {
    it('should render title new customer', () => {
        render(
            <BrowserRouter>
                <NewCustomerScreen />
            </BrowserRouter>
        );
        const allCustomersText = screen.getByText(/new customer/i);
        expect(allCustomersText).toBeInTheDocument();
    });
    it('should match snapshot', () => {
        const newCustomerScreen = render(
            <BrowserRouter>
                <NewCustomerScreen />
            </BrowserRouter>
        );
        expect(newCustomerScreen).toMatchSnapshot();
    });
    it('should update submit button state on input change', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <NewCustomerScreen />
            </BrowserRouter>
        );

        expect(getByTestId(/submit-button/)).toBeDisabled();
        expect(getByTestId(/name-input/).textContent).toBe("");

        fireEvent.change(getByTestId(/name-input/), {target: {value: 'Text' } } );

        expect(getByTestId(/submit-button/)).toBeEnabled();
    });
});
