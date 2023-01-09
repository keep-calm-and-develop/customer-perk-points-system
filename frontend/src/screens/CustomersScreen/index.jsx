import CustomerItem from "./CustomerItem";
import "./styles.css";
import { useGetCustomers } from "./useGetCustomers";

const CustomersScreen = () => {
    const { customers, loading } = useGetCustomers();
    return (
        <div className="page-container">
            <h1>All Customers</h1>
            {
                loading
                ? 'Fetching customers...'
                : <div className="customers-list">
                {
                    customers.map(({ name, customerID }) => (
                        <CustomerItem key={customerID} name={name} customerID={customerID} />
                    ))
                }
                </div>
            }
        </div>
    );
};

export default CustomersScreen;