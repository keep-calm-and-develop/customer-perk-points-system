import { useCallback, useState } from "react";

const useCustomerNameState = () => {
    const [customerName, setCustomerName] = useState('');

    const onCustomerNameChange = useCallback((event) => {
        setCustomerName(event.currentTarget.value);
    }, []);

    return [customerName, onCustomerNameChange];
};

export default useCustomerNameState;
