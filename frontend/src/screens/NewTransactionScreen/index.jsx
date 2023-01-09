import { React, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import blockInvalidChar from "./blockInvalidChar";
import "./styles.css";
import useAddTransaction from "./useAddTransaction";
import useAmountState from "./useAmountState";

function NewTransactionScreen() {
    const { customerID } = useParams();
    const { search } = useLocation();
    const searchParams = useMemo(() => new URLSearchParams(search), [search]);

    const [amount, onAmountChange] = useAmountState();
    const [{ isSubmitting, rewardPoints, errorMessage }, onSubmit] = useAddTransaction({ customerID, amount });

    return (
        <div className="page-container">
            <h1>Add Transaction for {searchParams.get('name')}</h1>
            <form className="add-new-transaction__page-content" onSubmit={onSubmit}>
                <div className="add-new-transaction__input-container">
                    <label htmlFor="amount">Purchase</label>
                    <input
                        type="number"
                        value={amount}
                        name="amount"
                        onChange={onAmountChange}
                        placeholder="Enter Amount Here"
                        onKeyDown={blockInvalidChar}
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" disabled={!amount || isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Transaction'}</button>
            </form>
            {
                (rewardPoints && !isSubmitting)
                &&
                <h3 className="successful-transaction-message">Purchase Added Successfully ✅. Earned <span>{rewardPoints}</span> reward points 💎.</h3>
            }
        </div>
    );
}

export default NewTransactionScreen;