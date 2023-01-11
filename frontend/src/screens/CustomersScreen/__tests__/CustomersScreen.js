import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomersScreen from "..";

test('Should match CustomersScreen snapshot', () => {
    const customersScreen = render(
        <BrowserRouter>
            <CustomersScreen />
        </BrowserRouter>
    );
    expect(customersScreen).toMatchSnapshot();
});

test('CustomersScreen should render all customers', () => {
    render(
        <BrowserRouter>
            <CustomersScreen/>
        </BrowserRouter>
    );
    const allCustomersText = screen.getByText(/all customers/i);
    expect(allCustomersText).toBeInTheDocument();
});