import { Link } from "react-router-dom";


const CustomerItem = ({ name, customerID }) => (
    <div className="customers-list__item">
        <span className="customers-list__item__customerID"><span className="list__item__customerID__hash">#</span> {customerID}</span>
        <span className="customers-list__item__name">{name}</span>
        <Link className="customers-list__item__add-transaction" to={`/${customerID}/new-transaction`}>Add Transaction</Link>
    </div>
);

export default CustomerItem;