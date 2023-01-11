import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import CustomerTableRow from "../CustomerTableRow";

describe('<CustomerTableRow />', () => {
    it('Should match snapshot', () => {
        const customerData = {
            name: "user",
            customerID: '1234',
            totalPoints: 100,
            monthlyPoints: [50, 30, 20],
        };
        const customerTableRow = render(
            <BrowserRouter>
                <CustomerTableRow
                    name={customerData.name}
                    customerID={customerData.customerID}
                    totalPoints={customerData.totalPoints}
                    monthlyPoints={customerData.monthlyPoints}
                />
            </BrowserRouter>
        );
        expect(customerTableRow).toMatchSnapshot();
    });
    
    it(' Should render correct  ', async () => {
        const customerData = {
            name: "user",
            customerID: '1234',
            totalPoints: 100,
            monthlyPoints: [50, 30, 20],
        };
        await act(async () => render(
            <BrowserRouter>
                <CustomerTableRow
                    name={customerData.name}
                    customerID={customerData.customerID}
                    totalPoints={customerData.totalPoints}
                    monthlyPoints={customerData.monthlyPoints}
                />
            </BrowserRouter>
        ));
        const customerNameElm = await waitFor(() => screen.findByTestId("customer-name"));
        expect(customerNameElm).toHaveTextContent(customerData.name);
        const customerTotalPointsElm = await waitFor(() => screen.findByTestId("customer-total-points"));
        expect(customerTotalPointsElm).toHaveTextContent(customerData.totalPoints);
        const firstMonthPointsElm = await waitFor(() => screen.findByTestId("customer-month-0-points"));
        expect(firstMonthPointsElm).toHaveTextContent(customerData.monthlyPoints[0]);
        const secondMonthPointsElm = await waitFor(() => screen.findByTestId("customer-month-1-points"));
        expect(secondMonthPointsElm).toHaveTextContent(customerData.monthlyPoints[1]);
        const thirdMonthPointsElm = await waitFor(() => screen.findByTestId("customer-month-2-points"));
        expect(thirdMonthPointsElm).toHaveTextContent(customerData.monthlyPoints[2]);
    });
});