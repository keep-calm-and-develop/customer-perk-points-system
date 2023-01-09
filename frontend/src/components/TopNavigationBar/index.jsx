import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const PAGES = [
    {
        title: 'Reward Points',
        route: '/getRewardPoints',
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
            <span className="top-navigation__title">Reward Points System</span>
            {
                PAGES.map(({ title, route }) => (
                    <button onClick={e => onNavigationClick(e, route)}>{title}</button>
                ))
            }
        </div>
    );
};

export default TopNavigationBar;
