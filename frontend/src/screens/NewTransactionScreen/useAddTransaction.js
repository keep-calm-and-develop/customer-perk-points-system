import { useCallback, useState } from "react";


const useAddTransaction = ({ customerID, amount }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isTransactionSuccessful, setCustomerID] = useState(null);

    const onSubmit = useCallback(async (event) => {
        setErrorMessage('');
        setIsSubmitting(true);
        event.preventDefault();
        event.stopPropagation();
        try {
            setTimeout(() => {
                setIsSubmitting(false);
                setCustomerID(true);
            }, 1000);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.toString());
        }
    }, [customerID, amount]);

    return [{ isSubmitting, errorMessage, isTransactionSuccessful }, onSubmit];
};

export default useAddTransaction;