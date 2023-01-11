import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewCustomerScreen from "../index";

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
});
