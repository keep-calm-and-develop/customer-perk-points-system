import { useCallback, useState } from "react";

export const useCustomerNameState = () => {
    const [name, setName] = useState('');

    const onNameChange = useCallback((event) => {
        setName(event.currentTarget.value);
    }, []);

    return [name, onNameChange];
};
