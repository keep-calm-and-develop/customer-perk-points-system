import axios from "axios";
import { useCallback, useState } from "react";
import { API_SERVICES } from "../../constants";

const useAddTransaction = ({ customerID, amount }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [rewardPoints, setRewardPoints] = useState(null);

    const onSubmit = useCallback(async (event) => {
        setErrorMessage('');
        setIsSubmitting(true);
        setRewardPoints(null);
        event.preventDefault();
        event.stopPropagation();
        try {
            const { data } = await axios.post(API_SERVICES.ADD_TRANSACTION, {
                amount: Number(amount),
                customerID,
            });
            setRewardPoints(Number(data.rewardPoints));
        } catch (error) {
            console.error(error);
            setErrorMessage(error?.response?.data?.message ?? error.toString());
        } finally {
            setIsSubmitting(false);
        }
    }, [customerID, amount]);

    return [{ isSubmitting, errorMessage, rewardPoints }, onSubmit];
};

export default useAddTransaction;