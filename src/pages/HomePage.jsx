import React, { useState } from "react";
import Home from "../Components/Home";
import Doctors from "../Components/Doctors";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import ChatFloatingButton from "../Components/ChatWithUs";

const HomePage = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div>
            {/* Hero Section */}
            <Home />

            {/* Features Section */}
            <Services />

            {/* Call to Action Button */}
            <Blogs />
            <Doctors />
            <Footer />

            {/* Floating Chat Button */}
            <ChatFloatingButton onClick={toggleChat} />

            {/* Chat Modal */}
            {showChat && (
                <div className="fixed bottom-16 right-5 bg-white text-black w-80 h-96 rounded-lg shadow-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg">Chat with Us</h3>
                        <button
                            className="text-gray-500 hover:text-gray-800"
                            onClick={toggleChat}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="overflow-y-auto h-64 border rounded-md p-2">
                        <p className="text-sm text-gray-700">
                            Hi there! How can we assist you today?
                        </p>
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}
        </div>
    );
};

export default HomePage;
