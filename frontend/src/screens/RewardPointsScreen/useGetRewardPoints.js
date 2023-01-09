import { useCallback, useState } from "react";

export const useGetRewardPoints = (customerID) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [rewardPoints, setRewardPoints] = useState(null);

    const onSubmit = useCallback(async (event) => {
        setErrorMessage('');
        setIsSubmitting(true);
        event.preventDefault();
        event.stopPropagation();
        try {
            setTimeout(() => {
                setIsSubmitting(false);
                setRewardPoints(100);
            }, 1000);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.toString());
        }
    }, [customerID]);

    return [{ isSubmitting, errorMessage, rewardPoints }, onSubmit];
};
