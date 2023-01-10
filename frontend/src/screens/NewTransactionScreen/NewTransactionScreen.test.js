import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewTransactionScreen from "./index";

test('renders NewTransactionScreen component', () => {
    const newTransactionScreen = render(
        <BrowserRouter>
            <NewTransactionScreen />
        </BrowserRouter>
    );
    const allCustomersText = screen.getByText(/add transaction/i);
    expect(allCustomersText).toBeInTheDocument();
    expect(newTransactionScreen).toMatchSnapshot();
});
