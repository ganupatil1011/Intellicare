import React, { useState } from "react";
import ChatFloatingButton from "../Components/ChatWithUs";

const NavbarWithChat = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="relative">
      {/* Existing Navbar code */}
      <div className="w-full z-10 text-white">
        {/* Navbar content */}
      </div>

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
            <p className="text-sm text-gray-700">How can we assist you?</p>
            {/* Chat messages and inputs can be added here */}
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 mt-2 border rounded-md"
          />
        </div>
      )}

      {/* Floating Chat Button */}
      <ChatFloatingButton onClick={toggleChat} />
    </div>
  );
};

export default NavbarWithChat;
