import { useParams } from "react-router-dom";
import "./styles.css";
import useAddTransaction from "./useAddTransaction";
import useAmountState from "./useAmountState";

const NewTransactionScreen = () => {
    const { customerID } = useParams();

    const [amount, onAmountChange] = useAmountState();
    const [{ isSubmitting, isTransactionSuccessful, errorMessage }, onSubmit] = useAddTransaction({ customerID, amount });

    return (
        <div className="page-container">
            <h1>Add Transaction for {customerID}</h1>
            <form className="add-new-transaction__page-content" onSubmit={onSubmit}>
                <div className="add-new-transaction__input-container">
                    <label htmlFor="amount">Purchase</label>
                    <input
                        type={'number'}
                        value={amount}
                        name="amount"
                        onChange={onAmountChange}
                        placeholder="Enter Amount Here"
                        onKeyDown={blockInvalidChar}
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
                <button type="submit" disabled={!amount || isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Transaction'}</button>
            </form>
            {
                (isTransactionSuccessful && !isSubmitting)
                &&
                <h3 className="successful-transaction-message">Transaction Added Successfully ✅</h3>
            }
        </div>
    );
};

const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export default NewTransactionScreen;