import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import blockInvalidChar from "../blockInvalidChar";
import NewTransactionScreen from "../index";

afterEach(cleanup);

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
    it('should update submit button state on input change', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <NewTransactionScreen />
            </BrowserRouter>
        );

        expect(getByTestId(/submit-button/)).toBeDisabled();
        expect(getByTestId(/amount-input/).textContent).toBe("");

        fireEvent.change(getByTestId(/amount-input/), { target: { value: 123 } });

        expect(getByTestId(/submit-button/)).toBeEnabled();
    });
    // it('should render name based on url param', () => {
        // jest.mock("react-router-dom", () => jest.fn().mockImplementation(() => ({
        //     ...jest.requireActual("react-router-dom"),
        //     useParams: () => ({
        //         customerID: '1234',
        //     }),
        //     useLocation: () => ({
        //         pathname: "",
        //         search: "?name=testName",
        //         hash: "",
        //         state: null,
        //         key: "default",
        //     }),
        // })));
        // render(
        //     <BrowserRouter>
        //         <NewTransactionScreen />
        //     </BrowserRouter>
        // );
        // const nameElm = screen.getByText('testName');
        // expect(nameElm).toBeInTheDocument();
    // });
});

describe('blockInvalidChar', () => {
    // negative cases
    it('Should call preventDefault for key e', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: 'e',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    it('Should call preventDefault for key E', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: 'E',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    it('Should call preventDefault for key +', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: '+',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    it('Should call preventDefault for key -', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        blockInvalidChar({
            ...MOCK_EVENT,
            key: '-',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(1);
    });
    // positive cases
    it('Should not call preventDefault for key 1', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        const result = blockInvalidChar({
            ...MOCK_EVENT,
            key: '1',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(0);
        expect(result).toBe(false);
        
    });
    it('Should not call preventDefault for key 9', () => {
        const MOCK_EVENT = {
            preventDefault: jest.fn(() => {}),
        };
        const result = blockInvalidChar({
            ...MOCK_EVENT,
            key: '9',
        });

        expect(MOCK_EVENT.preventDefault.mock.calls).toHaveLength(0);
        expect(result).toBe(false);
    });
});