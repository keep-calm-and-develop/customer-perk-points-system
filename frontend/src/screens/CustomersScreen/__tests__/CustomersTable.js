import { cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { MOCK_CUSTOMERS } from "../../../mockData";
import CustomersTable from "../CustomersTable";

afterEach(cleanup);

describe('<CustomersTable />', () => {
    it('Should match snapshot', () => {
        const customersTable = render(
            <BrowserRouter>
                <CustomersTable customers={MOCK_CUSTOMERS} />
            </BrowserRouter>
        );
        expect(customersTable).toMatchSnapshot();
    });

    it('Should render 2 rows', async () => {
        await act(async () => render(
            <BrowserRouter>
                <CustomersTable customers={MOCK_CUSTOMERS} />
            </BrowserRouter>
        ));
        const customerRows = await waitFor(() => screen.findAllByTestId("customer"));

        expect(customerRows).toHaveLength(2);
    });

    it('Should render text 0 customers', async () => {
        await act(async () => render(
            <BrowserRouter>
                <CustomersTable customers={[]} />
            </BrowserRouter>
        ));
        const noCustomersText = screen.getByText(/0 customers/i);

        expect(noCustomersText).toBeInTheDocument();
    });
});

