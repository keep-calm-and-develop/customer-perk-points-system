import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopNavigationBar from "./index";

test('renders TopNavigationBar component', () => {
    render(
        <BrowserRouter>
            <TopNavigationBar />
        </BrowserRouter>
    );
    const allCustomersLink = screen.getByText(/all customers/i);
    const newCustomersLink = screen.getByText(/new customer/i);
    expect(allCustomersLink).toBeInTheDocument();
    expect(newCustomersLink).toBeInTheDocument();
});
