import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


function CustomerItem({ name, customerID, totalPoints, monthlyPoints }) {
  return <tr className="customers-list__row">
        <td className="customers-list__cell-name">{name}</td>
        <td className="customers-list__cell-points">{totalPoints}</td>
        {
            monthlyPoints.map((points, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td className="customers-list__cell-points" key={`${customerID}-${idx}`}>{points}</td>
            ))
        }
        <td><Link className="customers-list__cell-add-transaction" to={`/${customerID}/new-transaction?name=${name}`}>Add Transaction</Link></td>
    </tr>
}

CustomerItem.propTypes = {
    name: PropTypes.string.isRequired,
    customerID: PropTypes.string.isRequired,
    totalPoints: PropTypes.number.isRequired,
    monthlyPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CustomerItem;