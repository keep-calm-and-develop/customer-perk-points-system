import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { MOCK_CUSTOMERS } from "../../../constants";
import CustomersTable from "../CustomersTable";

test('Should match CustomersTable snapshot', () => {
    const customersTable = render(
        <BrowserRouter>
            <CustomersTable customers={MOCK_CUSTOMERS} />
        </BrowserRouter>
    );
    expect(customersTable).toMatchSnapshot();
});

test('CustomersTable Should render 2 rows', async () => {
    await act(async () => render(
        <BrowserRouter>
            <CustomersTable customers={MOCK_CUSTOMERS} />
        </BrowserRouter>
    ));
    const customerRows = await waitFor(() => screen.findAllByTestId("customer"));

    expect(customerRows).toHaveLength(2);
});

test('CustomersTable Should render 0 customers', async () => {
    await act(async () => render(
        <BrowserRouter>
            <CustomersTable customers={[]} />
        </BrowserRouter>
    ));
    const noCustomersText = screen.getByText(/0 customers/i);

    expect(noCustomersText).toBeInTheDocument();
});

