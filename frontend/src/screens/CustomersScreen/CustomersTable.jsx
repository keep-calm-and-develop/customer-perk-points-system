import PropTypes from "prop-types";
import { React, useMemo } from "react";
import CustomerTableRow from "./CustomerTableRow";
import getLastThreeMonths from "./getLastThreeMonths";

export default function CustomersTable({ customers }) {
    const lastThreeMonths = useMemo(() => getLastThreeMonths(), []);
    return (
        customers.length === 0
            ? <h3 className="no-customers-message">0 Customers</h3>
            : <table className="customers-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Points</th>
                        {lastThreeMonths.map((month) => <th key={month}>{month}</th>)}
                        <th>Transaction Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(({ name, customerID, totalPoints, monthlyPoints }) => (
                        <CustomerTableRow
                            key={customerID}
                            name={name}
                            customerID={customerID}
                            totalPoints={totalPoints}
                            monthlyPoints={monthlyPoints}
                        />
                    ))}
                </tbody>
            </table>
    );
}

CustomersTable.propTypes = {
    customers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        customerID: PropTypes.string,
        totalPoints: PropTypes.number,
        monthlyPoints: PropTypes.arrayOf(PropTypes.number),
    })).isRequired,
}
