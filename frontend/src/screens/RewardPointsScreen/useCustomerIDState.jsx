import { useCallback, useState } from "react";

export const useCustomerIDState = () => {
    const [customerID, setCustomerID] = useState('');

    const onCustomerIDChange = useCallback((event) => {
        setCustomerID(event.currentTarget.value);
    }, []);

    return [customerID, onCustomerIDChange];
};
