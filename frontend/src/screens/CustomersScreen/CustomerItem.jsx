import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


function CustomerItem({ name, customerID }) {
  return <div className="customers-list__item">
        <span className="customers-list__item__name">{name}</span>
        <Link className="customers-list__item__add-transaction" to={`/${customerID}/new-transaction?name=${name}`}>Add Transaction</Link>
    </div>
}

CustomerItem.propTypes = {
    name: PropTypes.string.isRequired,
    customerID: PropTypes.string.isRequired,
}

export default CustomerItem;