import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewTransactionScreen from "../index";

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
});
