import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomersScreen from "./index";

test('renders CustomersScreen component', () => {
    const customersScreen = render(
        <BrowserRouter>
            <CustomersScreen />
        </BrowserRouter>
    );
    const allCustomersText = screen.getByText(/all customers/i);
    expect(allCustomersText).toBeInTheDocument();
    expect(customersScreen).toMatchSnapshot();
});
