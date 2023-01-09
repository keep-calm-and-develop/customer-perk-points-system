import { useCallback, useState } from "react";

const useCustomerNameState = () => {
    const [name, setName] = useState('');

    const onNameChange = useCallback((event) => {
        setName(event.currentTarget.value);
    }, []);

    return [name, onNameChange];
};

export default useCustomerNameState;
