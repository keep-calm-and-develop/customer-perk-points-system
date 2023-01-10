
const findCustomerFromDB = ({ customersList, customerName }) => customersList.find((customer) => customer.name === customerName);

export default findCustomerFromDB;