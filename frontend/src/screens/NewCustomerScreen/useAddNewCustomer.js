import { useCallback, useState } from "react";

export const useAddNewCustomer = (name) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [customerID, setCustomerID] = useState(null);

    const onSubmit = useCallback(async (event) => {
        setErrorMessage('');
        setIsSubmitting(true);
        event.preventDefault();
        event.stopPropagation();
        try {
            setTimeout(() => {
                setIsSubmitting(false);
                setCustomerID(1241);
            }, 1000);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.toString());
        }
    }, [name]);

    return [{ isSubmitting, errorMessage, customerID }, onSubmit];
};
