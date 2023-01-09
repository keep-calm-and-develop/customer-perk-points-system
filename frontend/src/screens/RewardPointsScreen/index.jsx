import "./styles.css";
import { useCustomerNameState } from "./useCustomerNameState";
import { useGetRewardPoints } from "./useGetRewardPoints";

const RewardPointsScreen = () => {
    const [customerName, onCustomerNameChange] = useCustomerNameState();
    const [{ isSubmitting, errorMessage, rewardPoints }, onSubmit] = useGetRewardPoints(customerName);
    
    return (
        <div className="page-container get-reward-points">
            <h1>Get Reward Points</h1>
            <form className="get-reward-points__page-content" onSubmit={onSubmit}>
                <div className="get-reward-points__input-container">
                    <label htmlFor="customerName">Customer Name</label>
                    <input value={customerName} name="customerName" onChange={onCustomerNameChange} placeholder="Enter name here" />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" disabled={!customerName || isSubmitting}>{isSubmitting ? 'Fetching...' : 'Get Points'}</button>
            </form>
            {
                (rewardPoints && !isSubmitting)
                &&
                <h2 className="reward-points"><span>{rewardPoints}</span> 💎 reward points</h2>
            }
        </div>
    );
};

export default RewardPointsScreen;