import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomersScreen from "..";

afterEach(cleanup);

describe('<CustomersScreen/>', () => {
    it('Should match snapshot', () => {
        const customersScreen = render(
            <BrowserRouter>
                <CustomersScreen />
            </BrowserRouter>
        );
        expect(customersScreen).toMatchSnapshot();
    });

    it('should render text all customers', () => {
        render(
            <BrowserRouter>
                <CustomersScreen />
            </BrowserRouter>
        );
        const allCustomersText = screen.getByText(/all customers/i);
        expect(allCustomersText).toBeInTheDocument();
    });
});