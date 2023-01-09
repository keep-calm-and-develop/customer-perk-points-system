import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const PAGES = [
    {
        title: 'Reward Points',
        route: '/get-reward-points',
    },
    {
        title: 'All Customers',
        route: '/customers',
    },
    {
        title: 'New Customer',
        route: '/new-customer',
    },
];

const TopNavigationBar = () => {
    const navigate = useNavigate();

    const onNavigationClick = (e, to) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(to, { replace: true });
    };
    return (
        <div className="top-navigation">
            <Link to={'/'} className="top-navigation__title">Reward Points System</Link>
            {
                PAGES.map(({ title, route }) => (
                    <button key={route} onClick={e => onNavigationClick(e, route)}>{title}</button>
                ))
            }
        </div>
    );
};

export default TopNavigationBar;
