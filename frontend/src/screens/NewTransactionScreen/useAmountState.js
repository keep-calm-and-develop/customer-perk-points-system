import { useCallback, useState } from "react";

const useAmountState = () => {
    const [amount, setAmount] = useState('');

    const onAmountChange = useCallback((event) => {
        setAmount(event.currentTarget.value);
    }, []);

    return [amount, onAmountChange];
};

export default useAmountState;