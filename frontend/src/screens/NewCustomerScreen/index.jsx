import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import useAddNewCustomer from "./useAddNewCustomer";
import useCustomerNameState from "./useCustomerNameState";

function NewCustomerScreen() {
    const [name, onNameChange] = useCustomerNameState();
    const [{ isSubmitting, errorMessage, customerID }, onSubmit] = useAddNewCustomer(name);
    return (
        <div className="page-container add-new-customer">
        <h1>Add New Customer</h1>
        <form className="add-new-customer__page-content" onSubmit={onSubmit}>
            <div className="add-new-customer__input-container">
                <label htmlFor="name">Customer Name</label>
                <input value={name} name="name" onChange={onNameChange} placeholder="Enter Full Name" />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit" disabled={!name || isSubmitting}>{isSubmitting ? 'Creating...' : 'Add Customer'}</button>
        </form>
        {
            (customerID && !isSubmitting)
            &&
            <h3 className="customer-id">Customer created successfully, Visit to <Link to={`/${customerID}/new-transaction?name=${name}`}>add purchase</Link> 💰 and <Link to="/get-reward-points">know reward points</Link> 💎</h3>
        }
    </div>
    );
}

export default NewCustomerScreen;