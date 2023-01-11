import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function CustomerTableRow({ name, customerID, totalPoints, monthlyPoints }) {
  return <tr data-testid="customer" className="customers-list__row">
        <td data-testid="customer-name" className="customers-list__cell-name">{name}</td>
        <td data-testid="customer-total-points" className="customers-list__cell-points">{totalPoints}</td>
        {
            monthlyPoints.map((points, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td data-testid={`customer-month-${idx}-points`} className="customers-list__cell-points" key={`${customerID}-${idx}`}>{points}</td>
            ))
        }
        <td data-testid="customer-add-transaction"><Link className="customers-list__cell-add-transaction" to={`/${customerID}/new-transaction?name=${name}`}>Add Transaction</Link></td>
    </tr>
}

CustomerTableRow.propTypes = {
    name: PropTypes.string.isRequired,
    customerID: PropTypes.string.isRequired,
    totalPoints: PropTypes.number.isRequired,
    monthlyPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CustomerTableRow;