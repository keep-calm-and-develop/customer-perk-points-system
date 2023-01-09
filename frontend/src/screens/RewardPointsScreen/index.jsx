import "./styles.css";
import { useCustomerIDState } from "./useCustomerIDState";
import { useGetRewardPoints } from "./useGetRewardPoints";

const RewardPointsScreen = () => {
    const [customerID, onCustomerIDChange] = useCustomerIDState();
    const [{ isSubmitting, errorMessage, rewardPoints }, onSubmit] = useGetRewardPoints(customerID);
    
    return (
        <div className="page-container get-reward-points">
            <h1>Get Reward Points</h1>
            <form className="get-reward-points__page-content" onSubmit={onSubmit}>
                <div className="get-reward-points__input-container">
                    <label htmlFor="customerID">Customer ID</label>
                    <input value={customerID} name="customerID" onChange={onCustomerIDChange} placeholder="Enter ID here" />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
                <button type="submit" disabled={!customerID || isSubmitting}>{isSubmitting ? 'Fetching...' : 'Get Points'}</button>
            </form>
            {
                (rewardPoints && !isSubmitting)
                &&
                <h2 className="reward-points"><span>{rewardPoints}</span> 💎</h2>
            }
        </div>
    );
};

export default RewardPointsScreen;