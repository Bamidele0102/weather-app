import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full py-12 px-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your Weather App</h1>
                <p className="text-lg text-gray-600 mb-8">Get accurate weather forecasts for any location.</p>
                <div className="flex space-x-4">
                    <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">Login</a>
                    <a href="/register" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md shadow-md">Register</a>
                    {/* Add more Tailwind classes here */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
