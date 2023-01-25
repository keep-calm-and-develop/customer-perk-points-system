

const MOCK_CUSTOMER_1 = {
    "name": "Mounika",
    "customerID": "SDc9",
    "transactions": [
        {
            "amount": 120,
            "rewardPoints": 90,
            "timestamp": "2023-01-09T21:13:13+05:30"
        },
        {
            "amount": 120,
            "rewardPoints": 90,
            "timestamp": "2022-12-09T21:13:13+05:30"
        },
        {
            "amount": 50,
            "rewardPoints": 50,
            "timestamp": "2022-12-09T21:13:13+05:30"
        },
        {
            "amount": 110,
            "rewardPoints": 70,
            "timestamp": "2022-11-09T21:13:13+05:30"
        },
        {
            "amount": 125,
            "rewardPoints": 100,
            "timestamp": "2022-11-09T21:13:13+05:30"
        },
        {
            "amount": 200,
            "rewardPoints": 250,
            "timestamp": "2022-10-09T21:13:13+05:30"
        }
    ]
};

const MOCK_CUSTOMERS = [
    {
        "name": "user1",
        "customerID": "1",
        "totalPoints": 200,
        "monthlyPoints": [150, 30, 20]
    },
    {
        "name": "user2",
        "customerID": "2",
        "totalPoints": 100,
        "monthlyPoints": [50, 30, 20]
    }
];

export {
    MOCK_CUSTOMERS,
    MOCK_CUSTOMER_1,
};

