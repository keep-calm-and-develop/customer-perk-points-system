import axios from "axios";
import { useCallback, useState } from "react";
import { API_SERVICES } from "../../constants";

export const useAddNewCustomer = (name) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [customerID, setCustomerID] = useState(null);

    const onSubmit = useCallback(async (event) => {
        setErrorMessage('');
        setIsSubmitting(true);
        setCustomerID(null);
        event.preventDefault();
        event.stopPropagation();
        try {
            const { data } = await axios.post(API_SERVICES.ADD_CUSTOMER, { name });
            setCustomerID(data.customerID);
        } catch (error) {
            console.error(error);
            setErrorMessage(error?.response?.data?.message ?? error.toString());
        } finally {
            setIsSubmitting(false);
        }
    }, [name]);

    return [{ isSubmitting, errorMessage, customerID }, onSubmit];
};
