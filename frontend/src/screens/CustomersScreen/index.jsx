import { React } from "react";
import CustomersTable from "./CustomersTable";
import "./styles.css";
import useGetCustomers from "./useGetCustomers";

function CustomersScreen() {
    const { customers, loading } = useGetCustomers();
    return (
        <div className="page-container">
            <h1>All Customers</h1>
            {
                loading
                ? <div>Fetching customers...</div>
                : <CustomersTable customers={customers} />
            }
        </div>
    );
}

export default CustomersScreen;