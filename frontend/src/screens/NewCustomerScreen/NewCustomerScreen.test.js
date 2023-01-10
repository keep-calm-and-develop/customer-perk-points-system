import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewCustomerScreen from "./index";

test('renders NewCustomerScreen component', () => {
    render(
        <BrowserRouter>
            <NewCustomerScreen />
        </BrowserRouter>
    );
    const allCustomersText = screen.getByText(/new customer/i);
    expect(allCustomersText).toBeInTheDocument();
});
