import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import TopNavigationBar from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate
}));


describe('<TopNavigationBar/>', () => {
    it('should render all customers and new customers nav links', async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <TopNavigationBar />
                </BrowserRouter>
            );
        })
        const allCustomersLink = screen.getByText(/all customers/i);
        expect(allCustomersLink).toBeInTheDocument();

        const newCustomersLink = screen.getByText(/new customer/i);
        expect(newCustomersLink).toBeInTheDocument();
    });
    it('should match snapshot', async () => {
        let topNavigationBar;
        await act(() => {
            topNavigationBar = render(
                <BrowserRouter>
                    <TopNavigationBar />
                </BrowserRouter>
            );
        })
        expect(topNavigationBar).toMatchSnapshot();
    });
    it('should call mockedUsedNavigate with customers route', async () => {
        let topNavigationBar;
        await act(() => {
            topNavigationBar = render(
                <BrowserRouter>
                    <TopNavigationBar />
                </BrowserRouter>
            );
        })
        const { getByTestId } = topNavigationBar;
        const customersNavLink = getByTestId(/nav-button-customers/);
        expect(customersNavLink).toBeInTheDocument();
        userEvent.click(customersNavLink);
        await act(() => { });
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/customers', { replace: true });
    });
    it('should call mockedUsedNavigate with new-customer route', async () => {
        let topNavigationBar;
        await act(() => {
            topNavigationBar = render(
                <BrowserRouter>
                    <TopNavigationBar />
                </BrowserRouter>
            );
        })
        const { getByTestId } = topNavigationBar;
        const newCustomersNavLink = getByTestId(/nav-button-new-customer/);
        expect(newCustomersNavLink).toBeInTheDocument();
        userEvent.click(newCustomersNavLink);
        await act(() => { });
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/new-customer', { replace: true });
    });
});
