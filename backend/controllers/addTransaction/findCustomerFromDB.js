
const findCustomerFromDB = ({
    customersList,
    customerName,
    customerID,
}) => customersList.find((customer) => customer.name === customerName || customer.customerID === customerID);

export default findCustomerFromDB;