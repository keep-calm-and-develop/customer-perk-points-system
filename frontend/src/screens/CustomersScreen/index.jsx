import { React, useMemo } from "react";
import { MONTHS } from "../../constants";
import CustomerItem from "./CustomerItem";
import "./styles.css";
import useGetCustomers from "./useGetCustomers";

function subtractMonths(months) {
    const currentDate = new Date();
    const newDate = new Date();
    newDate.setMonth(currentDate.getMonth() - months);
    return newDate;
}

function getLastThreeMonths() {
    return [0, 1, 2].map((month) => MONTHS[subtractMonths(month).getMonth()]);
}

function CustomersScreen() {
    const { customers, loading } = useGetCustomers();
    const lastThreeMonths = useMemo(() => getLastThreeMonths(), []);
    return (
        <div className="page-container">
            <h1>All Customers</h1>
            {
                loading
                ? 'Fetching customers...'
                : <table className="customers-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Points</th>
                            {
                                lastThreeMonths.map((month) => <th key={month}>{month}</th>)
                            }
                            <th>Transaction Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.length === 0
                            ? <td><h3 className="no-customers-message">0 Customers</h3></td>
                            : customers.map(({ name, customerID, totalPoints, monthlyPoints }) => (
                                <CustomerItem key={customerID} name={name} customerID={customerID} totalPoints={totalPoints} monthlyPoints={monthlyPoints} />
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default CustomersScreen;