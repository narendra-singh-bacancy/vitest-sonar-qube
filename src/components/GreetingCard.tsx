import React from 'react';

interface GreetingCardProps {
    name: string;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ name }) => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    return (
        <div className="greeting-card">
            <div className="greeting-content">
                <span className="greeting-time">{getGreeting()},</span>
                <h2 className="greeting-name">{name}</h2>
                <p className="greeting-subtitle">Welcome back to your dashboard.</p>
            </div>
            <div className="greeting-decoration"></div>
        </div>
    );
};

export default GreetingCard;
