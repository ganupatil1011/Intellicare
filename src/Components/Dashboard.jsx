import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
    <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
            <h2 className="text-lg font-bold text-center py-4">Dashboard</h2>
            <nav className="flex flex-col space-y-2 px-4">
                <Link to="/patients" className="p-2 rounded hover:bg-gray-700">Patients</Link>
                <Link to="/analytics" className="p-2 rounded hover:bg-gray-700">Analytics</Link>
                <Link to="/settings" className="p-2 rounded hover:bg-gray-700">Settings</Link>
            </nav>
        </aside>
        <main className="flex-1 bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-4">Overview</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-lg font-semibold">Ongoing Cases</h2>
                    <p className="text-gray-600 mt-2">Graphical summary placeholder</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <p className="text-gray-600 mt-2">Update details placeholder</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-lg font-semibold">Quick Access</h2>
                    <p className="text-gray-600 mt-2">Patient data summary placeholder</p>
                </div>
            </div>
        </main>
    </div>
);

export default Dashboard;