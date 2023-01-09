import axios from "axios";
import { useEffect, useState } from "react";
import { API_SERVICES } from "../../constants";

const useGetCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${API_SERVICES.GET_CUSTOMERS}`);
                setCustomers(data.customers);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {
        customers,
        loading,
    };
};

export default useGetCustomers;
