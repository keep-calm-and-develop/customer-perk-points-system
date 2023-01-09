import axios from "axios";
import { useCallback, useState } from "react";
import { API_SERVICES } from "../../constants";

const useGetRewardPoints = (customerName) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [rewardPoints, setRewardPoints] = useState(null);

    const onSubmit = useCallback(async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setErrorMessage('');
        setIsSubmitting(true);
        setRewardPoints(null);
        try {
            const { data } = await axios.get(API_SERVICES.GET_REWARD_POINTS, {
                params: {
                    customerName,
                }
            });
            setRewardPoints(data.points);
        } catch (error) {
            setErrorMessage(error?.response?.data?.message ?? error.toString());
        } finally {
            setIsSubmitting(false);
        }
    }, [customerName]);

    return [{ isSubmitting, errorMessage, rewardPoints }, onSubmit];
};

export default useGetRewardPoints;
