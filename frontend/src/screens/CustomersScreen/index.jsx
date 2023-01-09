import CustomerItem from "./CustomerItem";
import "./styles.css";


const CUSTOMERS = [
    {
        name: 'tam',
        customerID: 2515.
    },
    {
        name: 'pam',
        customerID: 5622.
    },
    {
        name: 'sam',
        customerID: 2311.
    },
    {
        name: 'foo',
        customerID: 2361.
    },
    {
        name: 'bar',
        customerID: 7311.
    },
    {
        name: 'baz',
        customerID: 1311.
    },
];

const CustomersScreen = () => {
    return (
        <div className="page-container">
            <h1>All Customers</h1>
            <div className="customers-list">
                {
                    CUSTOMERS.map(({ name, customerID }) => (
                        <CustomerItem key={customerID} name={name} customerID={customerID} />
                    ))
                }
            </div>
        </div>
    );
};

export default CustomersScreen;